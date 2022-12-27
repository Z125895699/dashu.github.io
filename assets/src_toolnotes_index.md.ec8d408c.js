import{_ as s,c as a,o as n,d as l}from"./app.f215d62f.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C","slug":"mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C","link":"#mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C","children":[]},{"level":2,"title":"\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5 nvm\uFF0CMac \u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5 Xcode \u8F6F\u4EF6","slug":"\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5-nvm-mac-\u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5-xcode-\u8F6F\u4EF6","link":"#\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5-nvm-mac-\u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5-xcode-\u8F6F\u4EF6","children":[]},{"level":2,"title":"\u4F7F\u7528lazygit","slug":"\u4F7F\u7528lazygit","link":"#\u4F7F\u7528lazygit","children":[]}],"relativePath":"src/toolnotes/index.md","lastUpdated":1672149385000}'),e={name:"src/toolnotes/index.md"},p=l(`<h2 id="mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C" tabindex="-1">mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C <a class="header-anchor" href="#mac\u4F7F\u7528nvm\u7BA1\u7406node\u7248\u672C" aria-hidden="true">#</a></h2><p>*\u5B89\u88C5</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6216\u8005</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">wget </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">qO</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5-nvm-mac-\u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5-xcode-\u8F6F\u4EF6" tabindex="-1">\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5 nvm\uFF0CMac \u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5 Xcode \u8F6F\u4EF6 <a class="header-anchor" href="#\u60F3\u8981\u6210\u529F\u7684\u5B89\u88C5-nvm-mac-\u7CFB\u7EDF\u4E0B\u5FC5\u987B\u8981\u5148\u5B89\u88C5-xcode-\u8F6F\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u67E5\u770Bnvm\u5B89\u88C5\u6210\u529F \u8F93\u5165</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">version</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>nvm\u5E38\u7528\u7684\u547D\u4EE4</li></ul><ol><li>\u5B89\u88C5\u6700\u65B0\u7A33\u5B9A\u7248 node</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm install stable</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5B89\u88C5\u6307\u5B9A\u7248\u672C\uFF0C\u53EF\u6A21\u7CCA\u5B89\u88C5\uFF0C\u5982\uFF1A\u5B89\u88C5 v17.4.0\uFF0C\u65E2\u53EF $ nvm install v17.4.0\uFF0C\u53C8\u53EF $ nvm install 17.4</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> nvm install </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5207\u6362\u4F7F\u7528\u6307\u5B9A\u7684\u7248\u672C node</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nvm use </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4F7F\u7528lazygit" tabindex="-1">\u4F7F\u7528lazygit <a class="header-anchor" href="#\u4F7F\u7528lazygit" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> brew install jesseduffield</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">lazygit</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">lazygit</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u4F7F\u7528</li></ul><ol><li>\u76F4\u63A5\u5728\u9700\u8981\u4F7F\u7528\u7684\u4ED3\u5E93\u4E2D\u8F93\u5165lazygit \u5982\u679C\u89C9\u5F97\u547D\u4EE4\u5F88\u9EBB\u70E6\u53EF\u4EE5\u914D\u7F6E\u522B\u540Dlg,\u5982\u4E0B \u7136\u540E\u53EF\u4EE5\u76F4\u63A5\u8F93\u5165lg\u5C31\u80FD\u6253\u5F00lazygit\u9875\u9762</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">open </span><span style="color:#89DDFF;">~/.</span><span style="color:#A6ACCD;">bash_profile</span></span>
<span class="line"><span style="color:#A6ACCD;">alias lg</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lazygit</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">source </span><span style="color:#89DDFF;">~/.</span><span style="color:#A6ACCD;">bash_profile</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u6309x\u53EF\u4EE5\u67E5\u770B\u83DC\u5355 \u540C\u65F6\u652F\u63011234\u5207\u6362\u72B6\u6001\u533A</li></ol>`,22),o=[p];function c(i,t,r,d,v,m){return n(),a("div",null,o)}const b=s(e,[["render",c]]);export{y as __pageData,b as default};