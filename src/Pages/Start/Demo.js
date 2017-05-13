/** @jsx VirtualNode */

import { mutating, VirtualNode } from 'tweed'
import style from './Demo.css'
import CodeBox from '../../Window/CodeBox'

export default class Demo {
  @mutating _name = 'World'
  _codeBox = new CodeBox()

  _onInput = (event) => {
    this._name = event.target.value
  }

  render () {
    return (
      <div class={style.wrapper}>
        <div class={style.leftChild}>
          {this._codeBox.render({
            JavaScript: "<pre><code class=\"lang-javascript\"><span class=\"token keyword\">class</span><span class=\"token class-name\"> App</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token annotation\">@mutating</span> _name <span class=\"token operator\">=</span> <span class=\"token string\">'World'</span>\n\n  <span class=\"token function\">_onInput</span> <span class=\"token operator\">=</span> event <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name <span class=\"token operator\">=</span> event<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value\n\n  <span class=\"token function\">render </span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>input</span>\n          <span class=\"token attr-name\">on-input</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_onInput<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Hello <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>",
            TypeScript: "<pre><code class=\"lang-typescript\"><span class=\"token keyword\">class</span><span class=\"token class-name\"> App</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token annotation\">@mutating</span> <span class=\"token keyword\">private</span> _name <span class=\"token operator\">=</span> <span class=\"token string\">'World'</span>\n\n  <span class=\"token keyword\">private</span> <span class=\"token function\">_onInput</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>event<span class=\"token punctuation\">:</span><span class=\"token class-name\"> Event</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>event<span class=\"token punctuation\">.</span>target <span class=\"token keyword\">as</span> HTMLInputElement<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>value\n\n  <span class=\"token function\">render </span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>input</span>\n          <span class=\"token attr-name\">on-input</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_onInput<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Hello <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>_name<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span></code></pre>",
          }, true)}
        </div>
        <div class={style.rightChild}>
          <input
            on-input={this._onInput}
            value={this._name}
          />
          <p>Hello {this._name}</p>
        </div>
      </div>
    )
  }
}
