@props(['actions'])

<div {{ $attributesPreprocess($attributes) }}>

    @if ($isFixed)
        <div class="mdc-banner__fixed">
            @include('mbv::banner._content')
        </div>
    @else
        @include('mbv::banner._content')
    @endif
</div>
