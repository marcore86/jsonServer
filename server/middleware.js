module.exports = (req, res, next) => {
  res.header('X-Mock-Seed', process.env.FAKER_SEED || 'false')
  next()
}
