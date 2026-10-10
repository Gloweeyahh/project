const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const crypto = require('crypto')

exports.handler = async function (event) {
  try {
    // Expect JSON body with { filename, contentType }
    const { filename, contentType } = JSON.parse(event.body || '{}')
    if (!filename || !contentType) return { statusCode: 400, body: 'Missing filename or contentType' }

    if (!process.env.AWS_S3_BUCKET || !process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      return { statusCode: 501, body: 'S3 not configured. Set AWS_S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY.' }
    }

    const key = `${crypto.randomBytes(8).toString('hex')}_${filename}`
    const s3 = new S3Client({ region: process.env.AWS_REGION || 'us-east-1' })
    const put = new PutObjectCommand({ Bucket: process.env.AWS_S3_BUCKET, Key: key, ContentType: contentType })
    const url = await getSignedUrl(s3, put, { expiresIn: 60 * 5 })

    return { statusCode: 200, body: JSON.stringify({ url, key }) }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: String(err) }
  }
}
