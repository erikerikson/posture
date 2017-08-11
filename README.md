    # Posture - an opinionated Swagger linter
    optimize your swagger documentation

    ## Why
    Swagger is very flexible - you can a do as little or as much as you want. That's great for lowering the bar to adoption, however we all want to provide first-class experiences to our users, otherwise what's the point of building an API in the first place. Posture is here to help you stand up a little straighter and let you Swagger confidence.
    - Posture can stand alone as a one time tool, integrate into your CI/CD pipeline or help you audit your existing API documentation
    - Posture provides escalating warnings: breaking errors, important features and useful optimizations

    ## Install
    `npm install --global posture`

    ## Usage
    Run `posture` from any directory with no arguments to lint the swagger.json file in that directory.

    ```

    $ posture --help

      Usage: posture [options]


      Options:

        -V, --version            output the version number
        -s, --swagger [swagger]  path to swagger file if not in root directory
        -h, --help               output usage information

    ```

    ## Liscense
    Apache 2.0 http://www.apache.org/licenses/


