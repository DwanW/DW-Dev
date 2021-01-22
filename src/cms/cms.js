import React from 'react'
import CMS from 'netlify-cms-app'

import Blog from '../templates/blogTemplate'
import Service from '../templates/serviceTemplate'

CMS.registerPreviewTemplate('blog', ({ entry }) => (
    <Blog {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('service', ({ entry }) => (
    <Service {...entry.toJS().data} />
))