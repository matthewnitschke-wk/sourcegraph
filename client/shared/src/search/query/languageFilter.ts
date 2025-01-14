import uniq from 'lodash/uniq'

import type { Literal } from './token'

/**
 * List of languages that is shown initially when the `lang:` filter doesn't
 * have a value yet.
 */
export const POPULAR_LANGUAGES: string[] = [
    'Assembly',
    'Bash',
    'C',
    'C++',
    'C#',
    'CSS',
    'Dart',
    'Elixir',
    'Erlang',
    'Go',
    'GraphQL',
    'Groovy',
    'Haskell',
    'HTML',
    'Java',
    'JavaScript',
    'Kotlin',
    'JSON',
    'Julia',
    'Lua',
    'Markdown',
    'Objective-C',
    'OCaml',
    'PHP',
    'PowerShell',
    'Python',
    'R',
    'Ruby',
    'Rust',
    'Sass',
    'Scala',
    'SQL',
    'Swift',
    'Terraform',
    'TypeScript',
    'VBA',
    'XML',
    'YAML',
    'Zig',
]

/**
 * A list of all supported languages, ranking the popular languages higher by
 * including them first.
 * The whole list was extracted from
 * https://github.com/go-enry/go-enry/blob/master/data/alias.go via
 *
   curl "https://raw.githubusercontent.com/go-enry/go-enry/$(grep go-enry/go-enry go.mod|cut -d ' ' -f 2)/data/alias.go" \
   | awk -F : '/^var LanguageByAliasMap/ { MATCH=1; next } /^}/ { exit } MATCH==1 { gsub(/^ +/, "", $2); print $2 }' \
   | sort | uniq
 *
 */
export const ALL_LANGUAGES = uniq(
    POPULAR_LANGUAGES.concat([
        '1C Enterprise',
        '2-Dimensional Array',
        '4D',
        'ABAP',
        'ABAP CDS',
        'ABNF',
        'ActionScript',
        'Ada',
        'Adobe Font Metrics',
        'Agda',
        'AGS Script',
        'AIDL',
        'AL',
        'Alloy',
        'Alpine Abuild',
        'Altium Designer',
        'AMPL',
        'AngelScript',
        'Ant Build System',
        'ANTLR',
        'ApacheConf',
        'Apex',
        'API Blueprint',
        'APL',
        'Apollo Guidance Computer',
        'AppleScript',
        'Arc',
        'AsciiDoc',
        'ASL',
        'ASN.1',
        'AspectJ',
        'ASP.NET',
        'Assembly',
        'Astro',
        'Asymptote',
        'ATS',
        'Augeas',
        'AutoHotkey',
        'AutoIt',
        'Avro IDL',
        'Awk',
        'Ballerina',
        'BASIC',
        'Batchfile',
        'Beef',
        'Befunge',
        'Berry',
        'BibTeX',
        'Bicep',
        'Bison',
        'BitBake',
        'Blade',
        'BlitzBasic',
        'BlitzMax',
        'Bluespec',
        'Boo',
        'Boogie',
        'Brainfuck',
        'Brightscript',
        'Browserslist',
        'C',
        'C#',
        'C++',
        'C2hs Haskell',
        'Cabal Config',
        'Cadence',
        'Cairo',
        'CameLIGO',
        "Cap'n Proto",
        'CartoCSS',
        'Ceylon',
        'Chapel',
        'Charity',
        'ChucK',
        'CIL',
        'Cirru',
        'Clarion',
        'Clarity',
        'Classic ASP',
        'Clean',
        'Click',
        'CLIPS',
        'Clojure',
        'Closure Templates',
        'Cloud Firestore Security Rules',
        'CMake',
        'C-ObjDump',
        'COBOL',
        'CODEOWNERS',
        'CodeQL',
        'CoffeeScript',
        'ColdFusion',
        'ColdFusion CFC',
        'COLLADA',
        'Common Lisp',
        'Common Workflow Language',
        'Component Pascal',
        'CoNLL-U',
        'Cool',
        'Coq',
        'Cpp-ObjDump',
        'Creole',
        'Crystal',
        'CSON',
        'Csound',
        'Csound Document',
        'Csound Score',
        'CSS',
        'CSV',
        'Cuda',
        'CUE',
        'Cue Sheet',
        'cURL Config',
        'Curry',
        'CWeb',
        'Cycript',
        'Cython',
        'D',
        'Dafny',
        'Darcs Patch',
        'Dart',
        'DataWeave',
        'Debian Package Control File',
        'DenizenScript',
        'desktop',
        'Dhall',
        'Diff',
        'DIGITAL Command Language',
        'dircolors',
        'DirectX 3D File',
        'DM',
        'DNS Zone',
        'D-ObjDump',
        'Dockerfile',
        'Dogescript',
        'DTrace',
        'Dylan',
        'E',
        'Eagle',
        'Earthly',
        'Easybuild',
        'EBNF',
        'eC',
        'Ecere Projects',
        'ECL',
        'ECLiPSe',
        'EditorConfig',
        'Edje Data Collection',
        'edn',
        'Eiffel',
        'EJS',
        'Elixir',
        'Elm',
        'Emacs Lisp',
        'E-mail',
        'EmberScript',
        'EQ',
        'Erlang',
        'Euphoria',
        'F#',
        'F*',
        'Factor',
        'Fancy',
        'Fantom',
        'Faust',
        'Fennel',
        'FIGlet Font',
        'Filebench WML',
        'Filterscript',
        'fish',
        'Fluent',
        'FLUX',
        'Formatted',
        'Forth',
        'Fortran',
        'Fortran Free Form',
        'FreeBasic',
        'FreeMarker',
        'Frege',
        'Futhark',
        'Game Maker Language',
        'GAML',
        'GAMS',
        'GAP',
        'GCC Machine Description',
        'G-code',
        'GDB',
        'GDScript',
        'GEDCOM',
        'Gemfile.lock',
        'Genero',
        'Genero Forms',
        'Genie',
        'Genshi',
        'Gentoo Ebuild',
        'Gentoo Eclass',
        'Gerber Image',
        'Gettext Catalog',
        'Gherkin',
        'Git Attributes',
        'Git Config',
        'Gleam',
        'GLSL',
        'Glyph',
        'Glyph Bitmap Distribution Format',
        'GN',
        'Gnuplot',
        'Go',
        'Go Checksums',
        'Golo',
        'Go Module',
        'Gosu',
        'Grace',
        'Gradle',
        'Grammatical Framework',
        'Graph Modeling Language',
        'GraphQL',
        'Graphviz (DOT)',
        'Groovy',
        'Groovy Server Pages',
        'GSC',
        'Hack',
        'Haml',
        'Handlebars',
        'HAProxy',
        'Harbour',
        'Haskell',
        'Haxe',
        'HCL',
        'HiveQL',
        'HLSL',
        'HolyC',
        'hoon',
        'HTML',
        'HTML+ECR',
        'HTML+EEX',
        'HTML+ERB',
        'HTML+PHP',
        'HTML+Razor',
        'HTTP',
        'HXML',
        'Hy',
        'HyPhy',
        'IDL',
        'Idris',
        'Ignore List',
        'IGOR Pro',
        'ImageJ Macro',
        'Inform 7',
        'INI',
        'Inno Setup',
        'Io',
        'Ioke',
        'IRC log',
        'Isabelle',
        'Isabelle ROOT',
        'J',
        'Janet',
        'JAR Manifest',
        'Jasmin',
        'Java',
        'Java Properties',
        'JavaScript',
        'JavaScript+ERB',
        'Java Server Pages',
        'Jest Snapshot',
        'JFlex',
        'Jinja',
        'Jison',
        'Jison Lex',
        'Jolie',
        'jq',
        'JSON',
        'JSON5',
        'JSONiq',
        'JSONLD',
        'Jsonnet',
        'JSON with Comments',
        'Julia',
        'Jupyter Notebook',
        'Kaitai Struct',
        'KakouneScript',
        'KiCad Layout',
        'KiCad Legacy Layout',
        'KiCad Schematic',
        'Kit',
        'Kotlin',
        'KRL',
        'Kusto',
        'kvlang',
        'LabVIEW',
        'Lark',
        'Lasso',
        'Latte',
        'Lean',
        'Less',
        'Lex',
        'LFE',
        'LigoLANG',
        'LilyPond',
        'Limbo',
        'Linker Script',
        'Linux Kernel Module',
        'Liquid',
        'Literate Agda',
        'Literate CoffeeScript',
        'Literate Haskell',
        'LiveScript',
        'LLVM',
        'Logos',
        'Logtalk',
        'LOLCODE',
        'LookML',
        'LoomScript',
        'LSL',
        'LTspice Symbol',
        'Lua',
        'M',
        'M4',
        'M4Sugar',
        'Macaulay2',
        'Makefile',
        'Mako',
        'Markdown',
        'Marko',
        'Mask',
        'Mathematica',
        'MATLAB',
        'Maven POM',
        'Max',
        'MAXScript',
        'mcfunction',
        'Mercury',
        'Meson',
        'Metal',
        'Microsoft Developer Studio Project',
        'Microsoft Visual Studio Solution',
        'MiniD',
        'MiniYAML',
        'Mint',
        'Mirah',
        'mIRC Script',
        'MLIR',
        'Modelica',
        'Modula-2',
        'Modula-3',
        'Module Management System',
        'Monkey',
        'Monkey C',
        'Moocode',
        'MoonScript',
        'Motoko',
        'Motorola 68K Assembly',
        'MQL4',
        'MQL5',
        'MTML',
        'MUF',
        'mupad',
        'Muse',
        'Mustache',
        'Myghty',
        'nanorc',
        'NASL',
        'NCL',
        'Nearley',
        'Nemerle',
        'NEON',
        'nesC',
        'NetLinx',
        'NetLinx+ERB',
        'NetLogo',
        'NewLisp',
        'Nextflow',
        'Nginx',
        'Nim',
        'Ninja',
        'Nit',
        'Nix',
        'NL',
        'NPM Config',
        'NSIS',
        'Nu',
        'NumPy',
        'Nunjucks',
        'NWScript',
        'ObjDump',
        'Object Data Instance Notation',
        'Objective-C',
        'Objective-C++',
        'Objective-J',
        'ObjectScript',
        'OCaml',
        'Odin',
        'Omgrofl',
        'ooc',
        'Opa',
        'Opal',
        'OpenCL',
        'OpenEdge ABL',
        'Open Policy Agent',
        'OpenQASM',
        'OpenRC runscript',
        'OpenSCAD',
        'OpenStep Property List',
        'OpenType Feature File',
        'Org',
        'Ox',
        'Oxygene',
        'Oz',
        'P4',
        'Pan',
        'Papyrus',
        'Parrot',
        'Parrot Assembly',
        'Parrot Internal Representation',
        'Pascal',
        'Pawn',
        'PEG.js',
        'Pep8',
        'Perl',
        'PHP',
        'Pic',
        'Pickle',
        'PicoLisp',
        'PigLatin',
        'Pike',
        'PlantUML',
        'PLpgSQL',
        'PLSQL',
        'Pod',
        'Pod 6',
        'PogoScript',
        'Pony',
        'PostCSS',
        'PostScript',
        'POV-Ray SDL',
        'PowerBuilder',
        'PowerShell',
        'Prisma',
        'Processing',
        'Procfile',
        'Proguard',
        'Prolog',
        'Promela',
        'Propeller Spin',
        'Protocol Buffer',
        'Protocol Buffer Text Format',
        'Public Key',
        'Pug',
        'Puppet',
        'PureBasic',
        'Pure Data',
        'PureScript',
        'Python',
        'Python console',
        'Python traceback',
        'q',
        'Q#',
        'QMake',
        'QML',
        'Qt Script',
        'Quake',
        'R',
        'Racket',
        'Ragel',
        'Raku',
        'RAML',
        'Rascal',
        'Raw token data',
        'RDoc',
        'Readline Config',
        'REALbasic',
        'Reason',
        'ReasonLIGO',
        'Rebol',
        'Record Jar',
        'Red',
        'Redcode',
        'Redirect Rules',
        'Regular Expression',
        'RenderScript',
        "Ren'Py",
        'ReScript',
        'reStructuredText',
        'REXX',
        'Rich Text Format',
        'Ring',
        'Riot',
        'RMarkdown',
        'RobotFramework',
        'robots.txt',
        'Roff',
        'Roff Manpage',
        'Rouge',
        'RPC',
        'RPGLE',
        'RPM Spec',
        'Ruby',
        'RUNOFF',
        'Rust',
        'Sage',
        'SaltStack',
        'SAS',
        'Sass',
        'Scala',
        'Scaml',
        'Scheme',
        'Scilab',
        'SCSS',
        'sed',
        'Self',
        'SELinux Policy',
        'ShaderLab',
        'Shell',
        'ShellCheck Config',
        'ShellSession',
        'Shen',
        'Sieve',
        'Singularity',
        'Slash',
        'Slice',
        'Slim',
        'Smali',
        'Smalltalk',
        'Smarty',
        'SmPL',
        'SMT',
        'Solidity',
        'Soong',
        'SourcePawn',
        'SPARQL',
        'Spline Font Database',
        'SQF',
        'SQL',
        'SQLPL',
        'Squirrel',
        'SRecode Template',
        'SSH Config',
        'Stan',
        'Standard ML',
        'Starlark',
        'Stata',
        'STON',
        'StringTemplate',
        'Stylus',
        'SubRip Text',
        'SugarSS',
        'SuperCollider',
        'Svelte',
        'SVG',
        'Swift',
        'SWIG',
        'SystemVerilog',
        'Talon',
        'Tcl',
        'Tcsh',
        'Tea',
        'Terra',
        'TeX',
        'Texinfo',
        'Text',
        'Textile',
        'TextMate Properties',
        'Thrift',
        'TI Program',
        'TLA',
        'TOML',
        'TSQL',
        'TSV',
        'TSX',
        'Turing',
        'Turtle',
        'Twig',
        'TXL',
        'Type Language',
        'TypeScript',
        'Unified Parallel C',
        'Unity3D Asset',
        'Unix Assembly',
        'Uno',
        'UnrealScript',
        'UrWeb',
        'V',
        'Vala',
        'Valve Data Format',
        'VBA',
        'VBScript',
        'VCL',
        'Verilog',
        'VHDL',
        'Vim Help File',
        'Vim Script',
        'Vim Snippet',
        'Visual Basic .NET',
        'Volt',
        'Vue',
        'Vyper',
        'Wavefront Material',
        'Wavefront Object',
        'wdl',
        'WebAssembly',
        'WebIDL',
        'Web Ontology Language',
        'WebVTT',
        'Wget Config',
        'Wikitext',
        'Win32 Message File',
        'Windows Registry Entries',
        'wisp',
        'Witcher Script',
        'Wollok',
        'World of Warcraft Addon Data',
        'X10',
        'xBase',
        'X BitMap',
        'XC',
        'XCompose',
        'X Font Directory Index',
        'XML',
        'XML Property List',
        'Xojo',
        'Xonsh',
        'XPages',
        'X PixMap',
        'XProc',
        'XQuery',
        'XS',
        'XSLT',
        'Xtend',
        'Yacc',
        'YAML',
        'YANG',
        'YARA',
        'YASnippet',
        'ZAP',
        'Zeek',
        'ZenScript',
        'Zephir',
        'Zig',
        'ZIL',
        'Zimpl',
    ])
)

// Returns a list of popular languages initially and a complete list when the
// user has provided input.
export const languageCompletion = (value: Literal | undefined): string[] =>
    value?.value ? ALL_LANGUAGES : POPULAR_LANGUAGES
