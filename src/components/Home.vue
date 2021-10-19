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
        <div class="projects_list" style="right: 0px" ref="chart_list">
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://supercrowds.co/who/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/supercrowds.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="https://supercrowds.co/who/"
                  >Super Crowds</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Super Crowds inc. is a creative firm located in Tokyo, where
                unique talent with various skills gather to create.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://snp.agency/en"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/saltpepper.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="https://snp.agency/en"
                  >Salt &amp; Pepper</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                A digital agency specializing in Ruby on Rails, Consulting, and
                Development
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://resn.co.nz/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/resn.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="https://resn.co.nz/"
                  >Resn. Infecting your Screen</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Resn is a creative digital agency infecting minds with gooey
                interactive experiences and digital stories.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://www.toverland.com/attractiepark/plattegrond/"
                style="
                  background-image: url(/assets/images/projects/plattegrond.jpg);
                "
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="https://www.toverland.com/attractiepark/plattegrond/"
                  >Plattegrond</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Ga op avontuur in onze magische werelden en beleef een
                onvergetelijke dag in Toverland!
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://www.insidepete.com/home/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/insidepete.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="http://www.insidepete.com/home/"
                  >Inside Pete</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Dive deep into the ever expanding body of a middle aged man and
                create a microscopic army to clean up an unhealthy body from the
                inside.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://www.google.com/doodles/celebrating-garden-gnomes"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/gardengnomes.gif') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="https://www.google.com/doodles/celebrating-garden-gnomes"
                  >Celebrating Garden Gnomes</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Fill your gnome garden with  in today's #GoogleDoodle!
                #GnomeDoodle
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://www.google.com/doodles/fourth-of-july-2018"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/fourthofjuly.gif') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="https://www.google.com/doodles/fourth-of-july-2018"
                  >Google Fourth of July Doodle</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Happy Fourth of July! #GoogleDoodle
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="https://www.ana-cooljapan.com/contents/craftsmanship/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/craftsmanship.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="https://www.ana-cooljapan.com/contents/craftsmanship/"
                  >CRAFTSMANSHIP: Is Japan Cool?</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                Japanese craftsmanship is a way of life for artisans who
                continue faithfully making their traditional crafts while
                devoting themselves to enhancing their skills.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://andyfoulds.co.uk/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/andyfoulds.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://andyfoulds.co.uk/"
                  >Andy Foulds</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href=""></a>
              </p>
              <p class="project_description">
                The Award-winning Interactive Design Portfolio of Freelance Web
                Designer Andy Foulds
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://coguz.com"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/coguz.png') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://coguz.com">Coguz</a>
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://coguz.com"
                  >Cankat Oguz</a
                >
              </p>
              <p class="project_description">
                Coguz is the personal presentation of Cankat Oguz through the
                random scenes of subconscious.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://mcwhopper.com/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/mcwhopper.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://mcwhopper.com/"
                  >McWhopper</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://bk.com/"
                  >Burger King</a
                >
              </p>
              <p class="project_description">
                For Peace Day, Burger King made an unprecedented peace proposal
                to McDonald's - to join forces and create the McWhopper.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://www.martin-h.com/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/martinh.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://www.martin-h.com/"
                  >MARTIN H WEFAIL</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://wefail.com/"
                  >WEFAIL</a
                >
              </p>
              <p class="project_description">
                A portfolio site, and bizarre interactive experience by Martin
                Hughes, web designer to the stars.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://wildflower.resn.co.nz/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/wildflower.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="http://wildflower.resn.co.nz/"
                  >Wildflower</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://resn.co.nz/">Resn</a>
              </p>
              <p class="project_description">
                Express your true feelings by sending a unique wildflower on
                Valentine's Day.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://dragonagekeep.com/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/dragonagekeep.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://dragonagekeep.com/"
                  >Interactive Story Summary</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://bioware.com"
                  >BioWare</a
                >
              </p>
              <p class="project_description">
                The Dragon Age Keep helps players form their own world states
                for Dragon Age: Inquisition. The ISS is a cinematic summary of
                the player's story, spanning the times of the first 2 games.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://cardsagainsthumanity.com/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/cah.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="http://cardsagainsthumanity.com/"
                  >Cards Against Humanity</a
                >
              </h4>
              <p class="project_credits">
                <a
                  class="link-inline-invert"
                  href="http://cardsagainsthumanity.com"
                  >Cards Against Humanity LLC</a
                >
              </p>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://benhantoot.com/"
                  >Ben Hantoot</a
                >
              </p>
              <p class="project_description">
                Unlike most of the party games you've played before, Cards
                Against Humanity is as despicable and awkward as you and your
                friends.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://screentoys.com"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/odd-couple.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://screentoys.com"
                  >The Odd Couples</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://andyfoulds.co.uk"
                  >Andy Foulds</a
                >
              </p>
              <p class="project_description">
                Blend famous faces into strange creatures, drag them around and
                send your creations to friends. FWA Site of the day for June 03
                2013.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://wefail.com"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/wefail.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a class="link-inline-invert" href="http://wefail.com"
                  >Wefail.com</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://wefail.com"
                  >Wefail</a
                >
              </p>
              <p class="project_description">
                Relaunching their iconic site in HTML5, Wefail is able to
                unleash their unique style once again to unsuspecting masses.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://pbskids.org/wildkratts/games/monkey-mayhem/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/platypus-monkey.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="http://pbskids.org/wildkratts/games/monkey-mayhem/"
                  >Platypus Game Engine</a
                >
              </h4>
              <p class="project_credits">
                <a
                  class="link-inline-invert"
                  href="http://gopherwoodstudios.com/"
                  >Gopherwood Studios</a
                >
              </p>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://pbskids.org/"
                  >PBS Kids</a
                >
              </p>
              <p class="project_description">
                An open source game engine built with CreateJS. Check out their
                first game, Wild Kratts Monkey Mayhem.
              </p>
            </div>
          </div>
          <div class="project">
            <div class="project_image">
              <a
                class="project_link"
                href="http://b10b.com/iondrift/epsilon/html5-createjs/"
                :style="{backgroundImage: 'url(' + require('@/assets/images/projects/b10b-epsilon.jpg') + ')'}"
              ></a>
            </div>
            <div class="project_text">
              <h4 class="project_title">
                <a
                  class="link-inline-invert"
                  href="http://b10b.com/iondrift/epsilon/html5-createjs/"
                  >Ion Drift</a
                >
              </h4>
              <p class="project_credits">
                <a class="link-inline-invert" href="http://b10b.com/">b10b</a>
              </p>
              <p class="project_description">
                A port of the Animate game Ion Drift, b10b was able to build a
                CreateJS version in less than a day that hit target framerates
                on even the lowest devices, and outperformed ports to other
                libraries.
              </p>
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
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    msg: String,
  },
})
export default class Home extends Vue {
  private onScrollRight() {
    let chart:any=this.$refs.chart;
    console.dir(chart.clientWidth);
  }
}
</script>
<style scoped>
</style>