(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1885:function(module,exports){module.exports=function(hljs){var NIX_KEYWORDS={keyword:"rec with let in inherit assert if else then",literal:"true false or and null",built_in:"import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"},ANTIQUOTE={className:"subst",begin:/\$\{/,end:/}/,keywords:NIX_KEYWORDS},STRING={className:"string",contains:[ANTIQUOTE],variants:[{begin:"''",end:"''"},{begin:'"',end:'"'}]},EXPRESSIONS=[hljs.NUMBER_MODE,hljs.HASH_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,STRING,{begin:/[a-zA-Z0-9-_]+(\s*=)/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/\S+/}]}];return ANTIQUOTE.contains=EXPRESSIONS,{aliases:["nixos"],keywords:NIX_KEYWORDS,contains:EXPRESSIONS}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_nix.222282a3a9e3316100ef.bundle.js.map