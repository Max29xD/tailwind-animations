export type ThemeType =
  | 'andromeeda'
  | 'aurora-x'
  | 'catppuccin-frappe'
  | 'catppuccin-latte'
  | 'catppuccin-macchiato'
  | 'catppuccin-mocha'
  | 'dark-plus'
  | 'dracula'
  | 'dracula-soft'
  | 'github-dark'
  | 'github-dark-dimmed'
  | 'github-light'
  | 'light-plus'
  | 'material-theme'
  | 'material-theme-darker'
  | 'material-theme-lighter'
  | 'material-theme-ocean'
  | 'material-theme-palenight'
  | 'min-dark'
  | 'min-light'
  | 'monokai'
  | 'nord'
  | 'one-dark-pro'
  | 'poimandres'
  | 'red'
  | 'rose-pine'
  | 'rose-pine-dawn'
  | 'rose-pine-moon'
  | 'slack-dark'
  | 'slack-ochin'
  | 'solarized-dark'
  | 'solarized-light'
  | 'vitesse-black'
  | 'vitesse-dark'
  | 'vitesse-light'

export type LanguageType =
  | 'abap'
  | 'actionscript-3'
  | 'ada'
  | 'angular-html'
  | 'angular-ts'
  | 'apache'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'ara'
  | 'asm'
  | 'astro'
  | 'awk'
  | 'ballerina'
  | 'bash'
  | 'bat'
  | 'batch'
  | 'be'
  | 'beancount'
  | 'berry'
  | 'bibtex'
  | 'bicep'
  | 'blade'
  | 'c'
  | 'c#'
  | 'c++'
  | 'cadence'
  | 'cdc'
  | 'clarity'
  | 'clj'
  | 'clojure'
  | 'cmake'
  | 'cmd'
  | 'cobol'
  | 'codeql'
  | 'coffee'
  | 'coffeescript'
  | 'console'
  | 'cpp'
  | 'cql'
  | 'crystal'
  | 'cs'
  | 'csharp'
  | 'css'
  | 'csv'
  | 'cue'
  | 'cypher'
  | 'd'
  | 'dart'
  | 'dax'
  | 'diff'
  | 'docker'
  | 'dockerfile'
  | 'dream-maker'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erl'
  | 'erlang'
  | 'f#'
  | 'fish'
  | 'fs'
  | 'fsharp'
  | 'fsl'
  | 'gdresource'
  | 'gdscript'
  | 'gdshader'
  | 'gherkin'
  | 'git-commit'
  | 'git-rebase'
  | 'gjs'
  | 'glimmer-js'
  | 'glimmer-ts'
  | 'glsl'
  | 'gnuplot'
  | 'go'
  | 'gql'
  | 'graphql'
  | 'groovy'
  | 'gts'
  | 'hack'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'hbs'
  | 'hcl'
  | 'hjson'
  | 'hlsl'
  | 'hs'
  | 'html'
  | 'http'
  | 'imba'
  | 'ini'
  | 'jade'
  | 'java'
  | 'javascript'
  | 'jinja'
  | 'jison'
  | 'js'
  | 'json'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'jsonnet'
  | 'jssm'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'kql'
  | 'kt'
  | 'kts'
  | 'kusto'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'logo'
  | 'lua'
  | 'make'
  | 'makefile'
  | 'markdown'
  | 'marko'
  | 'matlab'
  | 'md'
  | 'mdc'
  | 'mdx'
  | 'mermaid'
  | 'mojo'
  | 'nar'
  | 'narrat'
  | 'nextflow'
  | 'nf'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nu'
  | 'nushell'
  | 'objc'
  | 'objective-c'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'perl6'
  | 'php'
  | 'plsql'
  | 'postcss'
  | 'powerquery'
  | 'powershell'
  | 'prisma'
  | 'prolog'
  | 'properties'
  | 'proto'
  | 'ps'
  | 'ps1'
  | 'pug'
  | 'puppet'
  | 'purescript'
  | 'py'
  | 'python'
  | 'ql'
  | 'r'
  | 'raku'
  | 'razor'
  | 'rb'
  | 'reg'
  | 'rel'
  | 'riscv'
  | 'rs'
  | 'rst'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'sh'
  | 'shader'
  | 'shaderlab'
  | 'shell'
  | 'shellscript'
  | 'shellsession'
  | 'smalltalk'
  | 'solidity'
  | 'sparql'
  | 'spl'
  | 'splunk'
  | 'sql'
  | 'ssh-config'
  | 'stata'
  | 'styl'
  | 'stylus'
  | 'svelte'
  | 'swift'
  | 'system-verilog'
  | 'tasl'
  | 'tcl'
  | 'tex'
  | 'toml'
  | 'ts'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'v'
  | 'vb'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'viml'
  | 'vimscript'
  | 'vue'
  | 'vue-html'
  | 'vy'
  | 'vyper'
  | 'wasm'
  | 'wenyan'
  | 'wgsl'
  | 'wl'
  | 'wolfram'
  | 'xml'
  | 'xsl'
  | 'yaml'
  | 'yml'
  | 'zenscript'
  | 'zig'
  | 'zsh'
  | '文言'
