import { BrowserRouter, React, ReactDOM } from '../deps.ts'

import Document from '../routes/doc.tsx'

ReactDOM.hydrate(
    <BrowserRouter>
        <Document/>
    </BrowserRouter>,
    document.documentElement,
)
