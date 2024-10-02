'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-ad813db61b0b75c6e8717c70f104072ac549a6d6d90e1c803eb37d3e3f772bb25f3492f113760f2964129d4d1e22e81d633fd4532c3e32ab978c819ce3cf5eac"' : 'data-bs-target="#xs-components-links-module-AppModule-ad813db61b0b75c6e8717c70f104072ac549a6d6d90e1c803eb37d3e3f772bb25f3492f113760f2964129d4d1e22e81d633fd4532c3e32ab978c819ce3cf5eac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ad813db61b0b75c6e8717c70f104072ac549a6d6d90e1c803eb37d3e3f772bb25f3492f113760f2964129d4d1e22e81d633fd4532c3e32ab978c819ce3cf5eac"' :
                                            'id="xs-components-links-module-AppModule-ad813db61b0b75c6e8717c70f104072ac549a6d6d90e1c803eb37d3e3f772bb25f3492f113760f2964129d4d1e22e81d633fd4532c3e32ab978c819ce3cf5eac"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-a92e7f4a7c6eed089b1c38e836f3ead8a939899c126da8ef002f71b474e631498532b9da898e00582f5241a94474e2b5715289706aceaf285c89155bee0f64e4"' : 'data-bs-target="#xs-components-links-module-AuthModule-a92e7f4a7c6eed089b1c38e836f3ead8a939899c126da8ef002f71b474e631498532b9da898e00582f5241a94474e2b5715289706aceaf285c89155bee0f64e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-a92e7f4a7c6eed089b1c38e836f3ead8a939899c126da8ef002f71b474e631498532b9da898e00582f5241a94474e2b5715289706aceaf285c89155bee0f64e4"' :
                                            'id="xs-components-links-module-AuthModule-a92e7f4a7c6eed089b1c38e836f3ead8a939899c126da8ef002f71b474e631498532b9da898e00582f5241a94474e2b5715289706aceaf285c89155bee0f64e4"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-aa2565dbfb2649e2409f9fa4349c53724839497f4c822b6ac410ac78ed18430171a4f8db885420187b607466841e541f7abdba54166552d68b4b167f93832f93"' : 'data-bs-target="#xs-components-links-module-CoreModule-aa2565dbfb2649e2409f9fa4349c53724839497f4c822b6ac410ac78ed18430171a4f8db885420187b607466841e541f7abdba54166552d68b4b167f93832f93"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-aa2565dbfb2649e2409f9fa4349c53724839497f4c822b6ac410ac78ed18430171a4f8db885420187b607466841e541f7abdba54166552d68b4b167f93832f93"' :
                                            'id="xs-components-links-module-CoreModule-aa2565dbfb2649e2409f9fa4349c53724839497f4c822b6ac410ac78ed18430171a4f8db885420187b607466841e541f7abdba54166552d68b4b167f93832f93"' }>
                                            <li class="link">
                                                <a href="components/ErrorBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingIndicatorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CustomerModule-b8162904ca630ca821e5b34de4ba9ac097bfe877118b1ffaa9457edf6ef0a439dca32fc6a0dd2a1ab36dc9b9240800035cdefaf3effe1d5166a67923af2ca06b"' : 'data-bs-target="#xs-components-links-module-CustomerModule-b8162904ca630ca821e5b34de4ba9ac097bfe877118b1ffaa9457edf6ef0a439dca32fc6a0dd2a1ab36dc9b9240800035cdefaf3effe1d5166a67923af2ca06b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerModule-b8162904ca630ca821e5b34de4ba9ac097bfe877118b1ffaa9457edf6ef0a439dca32fc6a0dd2a1ab36dc9b9240800035cdefaf3effe1d5166a67923af2ca06b"' :
                                            'id="xs-components-links-module-CustomerModule-b8162904ca630ca821e5b34de4ba9ac097bfe877118b1ffaa9457edf6ef0a439dca32fc6a0dd2a1ab36dc9b9240800035cdefaf3effe1d5166a67923af2ca06b"' }>
                                            <li class="link">
                                                <a href="components/CustomerEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerNewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerRoutingModule.html" data-type="entity-link" >CustomerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link" >HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HelpModule-96b74753964054ad162403f8d779d7659dc240e1d29a32d0716431aeba7809c9a3fffd41aaa6b685af46d314fc4ba55e8cef0145d5803862e89f7d218d7f521b"' : 'data-bs-target="#xs-components-links-module-HelpModule-96b74753964054ad162403f8d779d7659dc240e1d29a32d0716431aeba7809c9a3fffd41aaa6b685af46d314fc4ba55e8cef0145d5803862e89f7d218d7f521b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-96b74753964054ad162403f8d779d7659dc240e1d29a32d0716431aeba7809c9a3fffd41aaa6b685af46d314fc4ba55e8cef0145d5803862e89f7d218d7f521b"' :
                                            'id="xs-components-links-module-HelpModule-96b74753964054ad162403f8d779d7659dc240e1d29a32d0716431aeba7809c9a3fffd41aaa6b685af46d314fc4ba55e8cef0145d5803862e89f7d218d7f521b"' }>
                                            <li class="link">
                                                <a href="components/HelpIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link" >HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LegalModule.html" data-type="entity-link" >LegalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LegalModule-537cf0577b187ff635ae1ddf46fbd03d6606ee539b56148cc2299d6b6546b1b6c4fa2b38fdebd0fcf57757362c6e7b6bb443b4be50bf44ea462af2309ebf013b"' : 'data-bs-target="#xs-components-links-module-LegalModule-537cf0577b187ff635ae1ddf46fbd03d6606ee539b56148cc2299d6b6546b1b6c4fa2b38fdebd0fcf57757362c6e7b6bb443b4be50bf44ea462af2309ebf013b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LegalModule-537cf0577b187ff635ae1ddf46fbd03d6606ee539b56148cc2299d6b6546b1b6c4fa2b38fdebd0fcf57757362c6e7b6bb443b4be50bf44ea462af2309ebf013b"' :
                                            'id="xs-components-links-module-LegalModule-537cf0577b187ff635ae1ddf46fbd03d6606ee539b56148cc2299d6b6546b1b6c4fa2b38fdebd0fcf57757362c6e7b6bb443b4be50bf44ea462af2309ebf013b"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LegalRoutingModule.html" data-type="entity-link" >LegalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-1abc69faf4889f3517952dac27f139857582ec919d9c3daa9a2aa1979532350aef88f3be146972a7381bc4c10f0481ac30b10b9a9b8cf1f9f6fa78b50eef2e7e"' : 'data-bs-target="#xs-components-links-module-ProductModule-1abc69faf4889f3517952dac27f139857582ec919d9c3daa9a2aa1979532350aef88f3be146972a7381bc4c10f0481ac30b10b9a9b8cf1f9f6fa78b50eef2e7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-1abc69faf4889f3517952dac27f139857582ec919d9c3daa9a2aa1979532350aef88f3be146972a7381bc4c10f0481ac30b10b9a9b8cf1f9f6fa78b50eef2e7e"' :
                                            'id="xs-components-links-module-ProductModule-1abc69faf4889f3517952dac27f139857582ec919d9c3daa9a2aa1979532350aef88f3be146972a7381bc4c10f0481ac30b10b9a9b8cf1f9f6fa78b50eef2e7e"' }>
                                            <li class="link">
                                                <a href="components/ProductEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductNewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartModule.html" data-type="entity-link" >StartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StartModule-b1b0077a31f7714dda0e78d61471f51dcd28ad30cbf73da84d1af52fd225f3bd3029da292c4c38724e4d683c46576a3b1cc9ff5c31f47a20ebb60a6cd3d06722"' : 'data-bs-target="#xs-components-links-module-StartModule-b1b0077a31f7714dda0e78d61471f51dcd28ad30cbf73da84d1af52fd225f3bd3029da292c4c38724e4d683c46576a3b1cc9ff5c31f47a20ebb60a6cd3d06722"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartModule-b1b0077a31f7714dda0e78d61471f51dcd28ad30cbf73da84d1af52fd225f3bd3029da292c4c38724e4d683c46576a3b1cc9ff5c31f47a20ebb60a6cd3d06722"' :
                                            'id="xs-components-links-module-StartModule-b1b0077a31f7714dda0e78d61471f51dcd28ad30cbf73da84d1af52fd225f3bd3029da292c4c38724e4d683c46576a3b1cc9ff5c31f47a20ebb60a6cd3d06722"' }>
                                            <li class="link">
                                                <a href="components/StartPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StartRoutingModule.html" data-type="entity-link" >StartRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link" >AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductEffects.html" data-type="entity-link" >ProductEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginData.html" data-type="entity-link" >LoginData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});