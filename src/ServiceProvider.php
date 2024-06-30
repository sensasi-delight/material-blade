<?php

namespace MaterialBlade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use MaterialBlade\Components\MbcList;
use MaterialBlade\Components\SwitchToggle;

class ServiceProvider extends BaseServiceProvider
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
        $this->loadViewsFrom(__DIR__.'/views/components', 'mbv');
        $this->loadRoutesFrom(__DIR__.'/routes.php');

        Blade::componentNamespace('MaterialBlade\\Components', 'MaterialBlade');
        Blade::componentNamespace('MaterialBlade\\Components', 'mbc');

        Blade::component('mbc::list', MbcList::class);
        Blade::component('mbc::switch', SwitchToggle::class);
    }
}
