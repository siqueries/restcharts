import fs from 'fs'
import util from 'util'
import path from 'path'

const readdir = util.promisify(fs.readdir)

export default {
  _path: 'routes',

  async get() {
    const files       = await readdir(this._path)
    const routeFiles  = files.filter(file => fs.lstatSync(path.join(this._path, file)).isFile())
    const routes = routeFiles.map(file => {
      const routeInfo = file.replace(/\.js/g,"").replace(/_/g,"/").replace(/\[star\]/g,"*").replace(/\[colon\]/g,":").split("..")
      const routeOrder = Number(routeInfo[0] || 0)
      const routePath = routeInfo[1]
      const routeVerb = routeInfo[2] || 'get'

      return {
        verb: routeVerb,
        path: routePath,
        order: routeOrder,
        file: file
      }
    })

    return routes.sort((r1, r2) => r1.order - r2.order)
  },

  checkAndRedirect(req, res, defaultRedirectPath='/') {
    if (req.session && req.session.returnTo)
      return res.redirect(redirectTo)

    res.redirect(defaultRedirectPath)
  }
}
