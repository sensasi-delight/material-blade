<x-mbc::card variant="outlined" {{ $attributesPreprocess($attributes) }}>
    <x-mbc::card-content style="padding-top: 8px; display: flex; gap: 8px; color: inherit">
        <x-mbc::icon :icon="$getIcon()" />

        <div>
            {{ $slot }}
        </div>
    </x-mbc::card-content>
</x-mbc::card>