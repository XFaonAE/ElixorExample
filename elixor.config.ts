import { typeConfig } from "@skylixgh/elixor";

export default typeConfig({
    name: 'ElixorExample',
    author: 'XFaon',
    apps: [
        {
            path: './apps/desktop',
            type: 'desktop',
            name: 'Elixor Desktop App',
            main: {
                renderer: './src/React.tsx',
                window: './src/Window.ts'
            }
        }
    ]
});
