const errorHandle = (res, err) => {
  const errMsg = err ? err.message : '欄位未填寫正確，或無此 id'
  res.status(400).send({
    "status": false,
    "message": errMsg
  })
  res.end()
}
const successHandle = (res, data) => {
  res.send({
    "status": true,
    data
  })
  res.end()
}
const notFoundHandle = (req, res) => {
  res.status(404).send({
    "status": false,
    "message": '無此網站路由'
  });
  res.end();
}
module.exports = {
  errorHandle,
  successHandle,
  notFoundHandle
}