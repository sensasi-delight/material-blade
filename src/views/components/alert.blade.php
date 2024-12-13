<x-mbc::card variant="outlined" {{ $attributesPreprocess($attributes) }}>
    <x-mbc::card-content class="mbc-p-2" style="display: flex; gap: 1em; color: inherit">
        <x-mbc::icon :name="$getIcon()" />

        <div>
            @isset($title)
                <x-mbc::typography class="mbc-m-0 mbc-mb-1" style="font-weight: bold; line-height: unset" element="p"
                    variant="h6">{{ $title }}</x-mbc::typography>
            @endisset

            <x-mbc::typography class="mbc-m-0">{{ $slot }}</x-mbc::typography>
        </div>
    </x-mbc::card-content>
</x-mbc::card>
