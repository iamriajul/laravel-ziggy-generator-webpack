const exec = require('child_process').exec
const chokidar = require('chokidar')

class LaravelZiggyGenerator {
    constructor() {
        this.isWatchingForChanges = false
        this.firstCompile = true
    }

    apply(compiler) {
        compiler.plugin('before-compile', (_, cb) => {
            if (this.firstCompile) {
                this.generate()
                this.firstCompile = false
            }
            cb()
        })

        if (this.isWatching()) {
            this.watchFiles()
        }
    }

    generate() {
        exec('php artisan ziggy:generate "resources/js/ziggy.js"')
    }

    watchFiles() {
        if (this.isWatchingForChanges) return

        chokidar.watch('routes/**/*', {
            persistent: true
        }).on('change', this.generate)

        this.isWatchingForChanges = true
    }

    isWatching() {
        return process.argv.includes('--watch')
    }
}

module.exports = LaravelZiggyGenerator
