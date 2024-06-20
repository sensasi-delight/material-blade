<div {{ $attributesPreprocess($attributes) }}>
    {{ $slot }}
</div>

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-chip-set')].map(el => {
        el.MDCChipSet = new mdc.chips.MDCChipSet(el);

        el.MDCChipSet.listen('MDCChip:removal', event => {
          console.log(event)
        el.removeChild(event.detail.root);
        });
        });



        {{-- input.addEventListener('keydown', function(event) {
          if (event.key === 'Enter' || event.keyCode === 13) {
            const chipEl = document.createElement('div');
            // ... perform operations to properly populate/decorate chip element ...
            chipSetEl.appendChild(chipEl);
            chipSet.addChip(chipEl);
          }
        }); --}}
    @endpush
@endonce
