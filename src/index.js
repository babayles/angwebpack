import angular from 'angular';
import ngAnimateModuleName from 'angular-animate';
import { myAppComponentName, myAppComponent } from './components/myApp.component'

const dependencies = [
    ngAnimateModuleName
];

var indexModule = angular.module("index", dependencies);

indexModule
    .component(myAppComponentName, myAppComponent);