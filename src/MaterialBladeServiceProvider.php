<?php

namespace MaterialBlade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use MaterialBlade\Components\MbcList;

class MaterialBladeServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/views/components', 'mbv');

        Blade::componentNamespace('MaterialBlade\\Components', 'MaterialBlade');
        Blade::componentNamespace('MaterialBlade\\Components', 'mbc');

        Blade::component('mbc::list', MbcList::class);
    }
}
