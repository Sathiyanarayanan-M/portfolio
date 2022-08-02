export const useCDNBucket = (name: string, wrap = false) => {
    const cdnUrl = 'https://cdn-bucket.netlify.app'
    return wrap ? `url(${cdnUrl}/${name})` : `${cdnUrl}/${name}`
}