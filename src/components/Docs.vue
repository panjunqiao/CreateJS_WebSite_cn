<template>
    <header class="nav-default-state">
        <div id="nav_container">
            <a id="nav-createjs" class="nav-item nav-logo logo-not-home" href="/"></a>
            <p id="navToggle" v-on:click="onClickMenu">Menu</p>
            <nav role="navigation" id="nav" class="yes-touch closed" ref="menu">
                <a href="/easeljs" class="nav-item">Easel<span class="title-js">JS</span></a>
                <a href="/tweenjs" class="nav-item">Tween<span class="title-js">JS</span></a>
                <a href="/soundjs" class="nav-item">Sound<span class="title-js">JS</span></a>
                <a href="/preloadjs" class="nav-item">Preload<span class="title-js">JS</span></a>
                <a href="/docs" class="nav-item active-page">Docs</a>
                <a href="/tools" class="nav-item">Tools</a>
                <a href="http://blog.createjs.com" class="nav-item">Blog</a>
                <a href="https://codepen.io/createjs" id="nav-codepen" class="nav-item nav-icon codepen-not-home"></a>
                <a href="https://github.com/createjs" id="nav-github" class="nav-item nav-icon github-not-home"></a>
                <a href="https://twitter.com/createjs" id="nav-twitter" class="nav-item nav-icon twitter-not-home"></a>
            </nav>
        </div>
    </header>

    <div id="docs" class="page-default page-in">

	<div id="banner" class="banner_bg-createjs">
		<div class="bgImage img svg"></div>
		<section class="banner-small_container">
			<h1>文档</h1>
			<p class="banner_text">API文档，以快速参考使用CreateJS时需要了解的内容。</p>
		</section> <!-- /container -->
	</div> <!-- /banner -->

	<section id="suite" class="suite_container">
        <h2>在线文档</h2>
		<div class="suite_item item_easeljs">
			<a href="/easeljs" class="link-image img svg"></a>
			<a href="/docs/easeljs" class="link-default">文档</a>
		</div> <!-- /easeljs -->

		<div class="suite_item item_tweenjs">
			<a href="/tweenjs" class="link-image img svg"></a>
			<a href="/docs/tweenjs" class="link-default">文档</a>
		</div> <!-- /tweenjs -->

		<div class="suite_item item_soundjs">
			<a href="/soundjs" class="link-image img svg"></a>
			<a href="/docs/soundjs" class="link-default">文档</a>
		</div> <!-- /soundjs -->

		<div class="suite_item item_preloadjs">
			<a href="/preloadjs" class="link-image img svg"></a>
			<a href="/docs/preloadjs" class="link-default">文档</a>
		</div> <!-- /preloadjs -->
        <p class="font-default">文档的压缩版本，包括每个库的最新版本的完整文档，可以在各自的 <a class="link-inline" href="http://github.com/CreateJS">GitHub 仓库</a> 中找到。</p>
	</section>

    <div id="browser_support">
        <section class="browser_support_container">
            <h2>浏览器支持</h2>
            <p class="font-default">CreateJS库兼容所有现代桌面和移动浏览器，并经过全面测试，可在尽可能广泛的浏览器中实现性能和可靠性。</p>

            <div class="browser_support-logos">
                <div class="browser-image img svg">
                    <a href="http://dev.microsoftedge.com/" class="link-image img-microsoft_edge"></a>
                    <p>Microsoft Edge</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-internet_explorer"></div>
                    <p>Internet Explorer 9+</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-firefox"></div>
                    <p>Firefox</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-chrome"></div>
                    <p>Chrome</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-safari"></div>
                    <p>Safari</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-opera"></div>
                    <p>Opera</p>
                </div>
                <div class="browser-image img svg">
                    <div class="link-image img-cordova png"></div>
                    <p>Cordova</p>
                </div>
            </div>

            <div class="notes_container">
                <h6 class="notes_heading">Notes</h6>
                <ul>
                    <li class="notes_list_item">移动浏览器需要“点击播放”来激活网络音频。默认情况下，在SoundJS版本0.7.x中会发生这种情况。</li>
                </ul>
                <h6 class="notes_heading">支持IE8及以下版本</h6>
                <ul>
                    <li class="notes_list_item">在EaselJS 0.8、TweenJS 0.6、prelojs 0.6和SoundJS 0.6中更改的CreateJS库继承方法与IE8及以下版本不兼容。对于IE早期版本的库支持，请使用较旧版本的库，在GitHub和CreateJS CDN上作为标记/版本提供。</li>
                    <li class="notes_list_item">EaselJS仅与支持HTML5 Canvas的浏览器兼容。</li>
                    <li class="notes_list_item">特定功能仅在浏览器支持时才起作用。例如，WebAudio API和XmlHttpRequests需要浏览器支持才能正常工作。</li>
                    <li class="notes_list_item">SoundJS仅支持IE8及更早版本，使用较早版本（&lt;0.5.2）和SWF回退。</li>
                </ul>
            </div>

            <p class="font-default">有关浏览器支持的其他说明，请参见每个库的文档主页。</p>
        </section>
    </div>

    <footer id="footer" class="banner_bg-createjs footer-shortPage">
        <div class="bgImage img svg"></div>
        <section class="footer_container-small">
            <a href="/" class="link-image footer_logo img svg"></a>
        </section>
    </footer> <!-- /footer -->

</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  props: {
    msg: String,
  },
})
export default class Docs extends Vue {
    
    private onClickMenu() {
        //console.dir(this.$refs.menu)
        let menu:any=this.$refs.menu;
        if(menu.className=='yes-touch closed'){
            menu.className='yes-touch'
        }else{
            menu.className='yes-touch closed'
        }
    }
}
</script>