<template>
  <header class="nav-home-state">
    <div id="nav_container">
      <a
        id="nav-createjs"
        class="nav-item nav-logo logo-home nav-item-home active-page"
        href="/"
      ></a>
      <p id="navToggle">Menu</p>
      <nav role="navigation" id="nav" class="yes-touch closed">
        <a href="/easeljs" class="nav-item nav-item-home"
          >Easel<span class="title-js">JS</span></a
        >
        <a href="/tweenjs" class="nav-item nav-item-home"
          >Tween<span class="title-js">JS</span></a
        >
        <a href="/soundjs" class="nav-item nav-item-home"
          >Sound<span class="title-js">JS</span></a
        >
        <a href="/preloadjs" class="nav-item nav-item-home"
          >Preload<span class="title-js">JS</span></a
        >
        <a href="/docs" class="nav-item nav-item-home">Docs</a>
        <a href="/tools" class="nav-item nav-item-home">Tools</a>
        <a href="http://blog.createjs.com" class="nav-item nav-item-home"
          >Blog</a
        >
        <a
          href="https://codepen.io/createjs"
          id="nav-codepen"
          class="nav-item nav-icon codepen-home nav-item-home"
        ></a>
        <a
          href="https://github.com/createjs"
          id="nav-github"
          class="nav-item nav-icon github-home nav-item-home"
        ></a>
        <a
          href="https://twitter.com/createjs"
          id="nav-twitter"
          class="nav-item nav-icon twitter-home nav-item-home"
        ></a>
      </nav>
    </div>
  </header>
  <div id="home" class="page-default page-in">
    <div id="banner" class="banner_bg-createjs">
      <canvas
        id="stage"
        class="canvas_bg-createjs"
        width="1307"
        height="568"
      ></canvas>
      <section class="banner_container">
        <div class="home_banner_logo img svg"></div>
        <div>
          <p class="banner_text">
            一套模块化的库和工具，通过HTML5协同工作或独立工作，在开放式web技术上实现丰富的交互式内容。
          </p>
          <a href="/downloads" class="link-default">下载</a>
          <a href="/demos" class="link-default">演示</a>
          <a href="/getting-started" class="link-default">入门指南</a>
        </div>
        <!-- /text -->
        <a
          id="banner_gskinner_link"
          class="link-inline"
          href="http://gskinner.com"
          >由ascainiao创建</a
        >
      </section>
      <!-- /container -->
    </div>
    <!-- /banner -->

    <section id="suite" class="suite_container">
      <div class="suite_item item_easeljs">
        <a href="/easeljs" class="link-image img svg"></a>
        <p class="item_description">
          可以轻松使用HTML5画布元素的JavaScript库。
        </p>
        <a href="/easeljs" class="link-default">了解更多</a>
      </div>
      <!-- /feature/easeljs -->

      <div class="suite_item item_tweenjs">
        <a href="/tweenjs" class="link-image img svg"></a>
        <p class="item_description">
          用于对HTML5动画进行缓动处理的JavaScript库。
        </p>
        <a href="/tweenjs" class="link-default">了解更多</a>
      </div>
      <!-- /feature/tweenjs -->

      <div class="suite_item item_soundjs">
        <a href="/soundjs" class="link-image img svg"></a>
        <p class="item_description">
          可以让您轻松高效地处理web上的音频的JavaScript库。
        </p>
        <a href="/soundjs" class="link-default">了解更多</a>
      </div>
      <!-- /feature/soundjs -->

      <div class="suite_item item_preloadjs">
        <a href="/preloadjs" class="link-image img svg"></a>
        <p class="item_description">
          允许您管理、协调资源和数据的预加载的JavaScript库。
        </p>
        <a href="/preloadjs" class="link-default">了解更多</a>
      </div>
      <!-- /feature/preloadjs -->
    </section>
    <!-- /suite -->

    <div id="instructions">
      <section class="instructions_container">
        <h2>安装</h2>
        <div class="codeBox">
          <pre
            class="language-markup"
          ><code class="  language-markup"><span class="token script"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://code.createjs.com/1.0.0/createjs.min.js<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span></code></pre>
        </div>
        <!-- /codeBox -->

        <p class="font-default">
          有关使用每个库的指南，请参阅,
          <a class="link-inline" href="/getting-started">访问我们的学习部分</a>
        </p>
      </section>
    </div>
    <!-- /instructions -->

    <div id="browser_support">
      <section class="browser_support_container">
        <h2>浏览器支持</h2>
        <p class="font-default">
          CreateJS库兼容所有现代桌面和移动浏览器，并经过全面测试，可在尽可能广泛的浏览器中实现性能和可靠性。
        </p>
        <div class="browser_support-logos">
          <div class="browser-image img svg">
            <a
              href="http://dev.microsoftedge.com/"
              class="link-image img-microsoft_edge"
            ></a>
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
        <a href="/docs" class="link-default">更多信息</a>
      </section>
    </div>

    <div id="workflow_wrapper">
      <section id="workflow" class="workflow_container">
        <h2>工作流集成</h2>
        <div class="workflow_descriptions">
          <a
            href="http://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html"
            class="link-image img-animate img svg"
          ></a>
          <p>
            使用
            <a
              class="link-inline"
              href="https://helpx.adobe.com/animate/using/creating-publishing-html5-canvas-document.html"
              >Adobe Animate</a
            >
            中的HTML5文档功能，构建界面、动画和资产库，并直接导出到CreateJS。生成的代码紧凑、可读且性能良好。
          </p>
          <a href="/zoe" class="link-image img-zoe img svg"></a>
          <p>
            <a class="link-inline" href="/zoe">Zoë</a>
            是一个AIR应用程序，用于将SWF动画导出为用于画布和CSS的EaselJS
            SpriteSheet。维护框架标签，重用类似框架，等等！
          </p>
        </div>
        <p class="font-default">
          了解更多改进工作流程的方法，
          <a class="link-inline" href="/tools">访问我们的工具页面。</a>
        </p>
      </section>
      <!-- /container -->
    </div>

    <div id="whitepaper">
      <section class="whitepaper_container">
        <a
          href="http://createjs.com/html5ads/"
          class="link-image banner-ads-icon img svg"
        ></a>
        <h2>使用CreateJS的HTML广告</h2>
        <p>
          CreateJS是HTML5广告开发的领先解决方案。请查看由gskinner的
          <a href="https://twitter.com/gskinner" class="link-inline"
            >Grant Skinner</a
          >
          和AOL的Cory Hudson撰写的关于使用CreateJS和Adobe
          Animate创建交互式HTML5广告的白皮书。还包括一个方便的AdHelper实用程序，它解决了开发人员在构建广告时面临的常见挑战。
        </p>
        <a href="http://createjs.com/html5ads/" class="link-default"
          >阅读白皮书</a
        >
      </section>
    </div>

    <div id="community">
      <section class="community_container">
        <h3>参加讨论</h3>
        <div class="fourButtons">
          <a
            href="http://reddit.com/r/CreateJS"
            class="link-default-invert link-reddit img svg"
            >讨论</a
          >
          <a
            href="http://plus.google.com/communities/113475154727121541523"
            class="link-default-invert link-googleplus img svg"
            >社区</a
          >
          <a
            href="https://github.com/CreateJS"
            class="link-default-invert link-github img svg"
            >ISSUES</a
          >
          <a
            href="http://stackoverflow.com/questions/tagged/createjs"
            class="link-default-invert link-stackoverflow img svg"
            >问题</a
          >
        </div>
      </section>
      <!-- /container -->
    </div>

    <div id="projects">
      <div class="projects_container">
        <div class="projects_list" style="right: 0px" ref="chart_list" v-on:animationend="page_animationend" v-on:transition="page_transition">

          <div class="project" v-for="(item,index) in infos" v-bind:key="index" ref="project">
            <div class="project_image">
              <a
                class="project_link"
                :href="item.url"
                :style="{backgroundImage: 'url(' + item.img + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" :href="item.url"
                  >{{item.title}}</a
                >
              </h4>
              <block v-if="item.credits">
              <p class="project_credits" v-for="(credit,id) in item.credits" v-bind:key="id">
                <a class="link-inline-invert" :href="credit.url">{{credit.txt}}</a>
              </p>
              </block>
              <p class="project_description">{{item.description}}</p>
            </div>
          </div>
          
        </div>
        <!-- /list -->

        <div class="projects_controls" ref="chart">
          <div class="scroll-left" style="display: none"></div>
          <div class="scroll-right" style="display: block" v-on:click="onScrollRight"></div>
          <ul class="projects_pagination">
            <li class="pagination_item active" data-page-id="1"></li>
            <li class="pagination_item" data-page-id="2"></li>
            <li class="pagination_item" data-page-id="3"></li>
            <li class="pagination_item" data-page-id="4"></li>
            <li class="pagination_item" data-page-id="5"></li>
            <li class="pagination_item" data-page-id="6"></li>
            <li class="pagination_item" data-page-id="7"></li>
            <li class="pagination_item" data-page-id="8"></li>
            <li class="pagination_item" data-page-id="9"></li>
            <li class="pagination_item" data-page-id="10"></li>
          </ul>
          <!-- placeholder, populated by JS -->
        </div>
        <!-- /controls -->
      </div>
      <!-- /container -->
    </div>

    <footer id="footer" class="banner_bg-createjs footer-large">
      <div class="bgImage img svg"></div>

      <section>
        <div class="home_footer_logo img svg"></div>
        <div>
          <a href="/downloads" class="link-default">下载</a>
          <a href="/demos" class="link-default">演示</a>
          <a href="/getting-started" class="link-default">入门指南</a>
        </div>
      </section>
      <!-- /container -->
    </footer>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component"
import axios from 'axios'
@Options({
  props: {
    msg: String,
  },
})

export default class Home extends Vue {
  infos:Array<any>=[];
  page_index:number=0;
  created(){
    //axios.get('./json/projects.json').then(response => (this.infos = response.data))
    axios.get('./json/projects.json').then((response)=>{
      this.infos=response.data as Array<any>;
    })
  }
  
  private onScrollRight() {
    this.page_index++;
    let chart_list:any=this.$refs.chart_list;
    //console.dir(chart_list);
    //chart_list.className="projects_list animate-right";
    let p:number=this.page_index*chart_list.clientWidth;
    console.log(this.$refs)
    chart_list.style.right=p+"px";
    let chart:any=this.$refs.chart;
    console.dir(chart.clientWidth);
  }

  private page_animationend() {
    //let chart_list:any=this.$refs.chart_list;
    //chart_list.className="projects_list";
  }

  private page_transition() {
    
  }
}
</script>
<style scoped>
</style>