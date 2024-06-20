<div {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-linear-progress__buffer">
        <div class="mdc-linear-progress__buffer-bar"></div>
        <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
    </div>
</div>

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-linear-progress')].map(el => {
        const value =  el.getAttribute('aria-valuenow');

        el.linearProgress = (new mdc.linearProgress.MDCLinearProgress(el));

        if(value) {
          el.linearProgress.progress = value
        }

        if(el.dataset.bufferValue && el.dataset.bufferValue != 1) {
          el.linearProgress.buffer = el.dataset.bufferValue
        }
        });
    @endpush
@endonce
