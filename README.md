# color-logem-npm

color-logem - A Lightweight and Customizable Colorful Console Logger

# Features

- Customizable colors and styles for console output
- Lightweight and easy to use
- Supports logging to the console in a variety of colors and styles, including red, green, yellow, blue, magenta, and cyan

# Installation

You can install color-logem using npm:

```bash
npm install @buike/color-logem
```

# Usage

```bash
import { log , info, warning, error } = require("@buike/color-logem");

# Log a blue message to the console with white background and bold text
log("Hello, world!");

# Log a blue message to the console with white background and bold text
info("info: some information!");

#  Log a yellow warning message to the console with white background and bold text
warning("Warning: something went wrong!");

#  Log a red error message to the console with white background and bold text
error("Error: something went terribly wrong!");

```

# API

`log(args: any)`
Logs a message to the console in blue text with white background and bold text.

`info(args: any)`
Logs an information message to the console in blue text with white background and normal text.

`warning(args: any)`
Logs a warning message to the console in yellow text with white background and bold text.

`error(args: any)`
Logs an error message to the console in red text with white background and bold text.

# License

color-logem is released under the MIT License. See LICENSE file for details.

# Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have any suggestions for improvement.
