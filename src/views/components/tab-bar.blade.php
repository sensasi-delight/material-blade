<div {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
                @php
                    $tabCount = 0;
                @endphp
                @foreach ($tabs as $key => $tab)
                    @php
                        $tabCount++;

                        $classAdd = '';
                        $isTabActive = false;
                        $icon = null;

                        if ($isFadeIndicator) {
                            $classAdd = ' mdc-tab-indicator--fade';
                        }

                        if ($activeTabNo === $tabCount || (!$activeTabNo && $loop->first)) {
                            $classAdd = ' mdc-tab-indicator--active';
                            $isTabActive = true;
                        }
                    @endphp

                    <button
                        class="mdc-tab{{ $isStacked ? ' mdc-tab--stacked' : '' }}{{ $isTabActive ? ' mdc-tab--active' : '' }}{{ $isLightText ? ' light-text' : '' }}"
                        {{ $isTabActive ? ' aria-selected="true"' : '' }} role="tab" tabindex="0">
                        <span class="mdc-tab__content">
                            @if (!is_int($key) || $isIconOnly)
                                <x-mbc::Icon aria-hidden="true" class="mdc-tab__icon" :name="is_int($key) ? $tab : $key"
                                    style="font-size: 24px" />
                            @endif
                            @if (!$isIconOnly)
                                <span class="mdc-tab__text-label">{{ $tab }}</span>
                            @endif
                        </span>

                        <span class="mdc-tab-indicator{{ $classAdd }}">
                            @if (isset($indicatorIcon))
                                <x-mbc::Icon aria-hidden="true"
                                    class="mdc-tab-indicator__content mdc-tab-indicator__content--icon"
                                    :name="$indicatorIcon" style="font-size: 24px" />
                            @else
                                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                            @endif
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                @endforeach
            </div>
        </div>
    </div>
</div>
