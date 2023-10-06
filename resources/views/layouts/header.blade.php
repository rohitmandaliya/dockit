<nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
    <div class="container-xxl">
        <div class="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
            <a href="{{ route('user.dashboard') }}" class="app-brand-link gap-2">
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                <i class="bx bx-x bx-sm align-middle"></i>
            </a>
        </div>
        <div class="navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a href="{{ route('user.dashboard') }}" class="nav-item nav-link px-0 me-xl-4">
                <img src="{{ asset('assets/img/favicon/favicon.png') }}" alt="viewlytics image" width="32"
                    height="32"> </a>
        </div>

        <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <ul class="navbar-nav flex-row align-items-center ms-auto">

                <li
                    class="nav-item navbar-search-wrapper me-2 me-xl-0 {{ Route::is('user.dashboard') ? 'active' : '' }}">
                    <a class="nav-link nav-link-search pt-2" href="{{ route('user.dashboard') }}">{{ __('Home') }}
                    </a>
                </li>
                <li class="nav-item navbar-search-wrapper me-2 me-xl-0 "><a class="nav-link nav-link-search pt-2"
                        href="#">{{ __('About Us') }}
                    </a>
                </li>

                <li class="nav-item navbar-search-wrapper me-2 me-xl-0"><a class="nav-link nav-link-search pt-2"
                        href="#">{{ __('Help') }}
                    </a>
                </li>
                <li class="nav-item navbar-search-wrapper me-2 me-xl-0"><a class="nav-link nav-link-search pt-2"
                        href="#">{{ __('Pricing') }}
                    </a>
                </li>
                @if (!Auth::guard()->user())
                    <li class="nav-item navbar-search-wrapper me-2 me-xl-0"><a class="nav-link nav-link-search pt-2"
                            href="{{ route('user.login-page') }}">{{ __('Sign In') }}
                        </a>
                    </li>
                @endif
                @if (Auth::guard()->user())
                    <!-- User -->
                    <li class="nav-item navbar-dropdown dropdown-user dropdown">
                        <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                            data-bs-toggle="dropdown">
                            <div class="avatar avatar-online">
                                <img src="{{ asset('assets/img/favicon/favicon.png') }}" alt class="rounded-circle" />
                            </div>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="#">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3">
                                            <div class="avatar avatar-online">
                                                <img src="{{ asset('assets/img/favicon/favicon.png') }}" alt
                                                    class="rounded-circle" />
                                            </div>
                                        </div>
                                        <div class="flex-grow-1">
                                            <span
                                                class="fw-semibold d-block lh-1">{{ Auth::guard()->user()->name }}</span>
                                            <small>{{ Auth::guard()->user()->email }}</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div class="dropdown-divider"></div>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="fa-regular fa-user me-2"></i>
                                    <span class="align-middle">{{ __('My Profile') }}</span>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="{{ route('user.logout') }}">
                                    <i class="fa-solid fa-power-off me-2"></i>
                                    <span class="align-middle">{{ __('Log Out') }}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!--/ User -->
                @endif

                <!--/ Notification -->
            </ul>
        </div>

        <!-- Search Small Screens -->
        <div class="navbar-search-wrapper search-input-wrapper container-xxl d-none">
            <input type="text" class="form-control search-input border-0" placeholder="Search..."
                aria-label="Search..." />
            <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
        </div>
    </div>
</nav>
