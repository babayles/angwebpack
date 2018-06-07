class myAppController {

    constructor($http) {
        'ngInject';
        this.title = "Webpack!";
        this.counter = 0;
        this.$http = $http;
    }

    buttonClick() {
        this.counter++;
    }

    getSomeData() {
        let vm = this;

        this.$http({
            url: "http://big2test/api/entryDetail/1911",
            method: 'GET',
            withCredentials: true
        })
        .then(function(response){
            vm.someData = response.data;
        });
    }
}

export const myAppComponentName = "myApp";

export const myAppComponent = {
    controller: myAppController,
    controllerAs: "vm",
    templateUrl: "./src/components/myApp.component.html"
};