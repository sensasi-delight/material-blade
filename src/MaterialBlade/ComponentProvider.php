<?php

namespace MaterialBlade;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ComponentProvider extends ServiceProvider
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
    $this->loadViewsFrom(__DIR__ . '/views', 'MaterialBlade');
    Blade::componentNamespace('MaterialBlade\\Components', 'MaterialBlade');
  }
}
