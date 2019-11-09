# DevicesUI

## Instructions to run the UI application
Two simple steps to follow to run the UI application when you navigate to the directory where package.json resides.

1. npm install => install the third party libraries.
2. npm start => run the application in standle alone mode.

## Tech stack
Two frameworks are used in this UI application:

1. [Angular](https://angular.io/): the third party js/ts library, the initial project structure is generated using angular cli tool. 
2. [Boostrap](https://getbootstrap.com/): the third party css framework for creating simple and beautiful UI components

## Overview of UI structure
1. Data: I created a class of device(**src/app/device.ts**) and a sample data file(**src/app/sample-devices.ts**) for serving the UI application when running in stand alone mode

2. UI layout:
the UI is consist of four components:

* HeaderComponent(**src/app/header**): which is simply a nav bar display the title: device manager

* FooterComponent(**src/app/footer**): which is simply a div element displaying the version number

* DashboardComponent(**src/app/dashboard**): this is the component where it has the table for displaying the whole list of device and also a drop down button and Panel component for displaying the top five devices that user chooses to get. This component(**src/app/dashboard/dashboard.component.ts**) has the main logic for displaying the list, toggle the selcted field by the user and further pass those data to the panel component. The editting of owner's name is achieved using input html element and two-way data binding mechanism(**ngModel**) built in angular.

* PanelComponent(**src/app/panel**): this is the component where it receive the field that user to choose, the list of devices and render the top five devices. This component(**src/app/panel.component.ts**) contains the logic for sorting the devices list and display corresponding field and top five device in the table.

Also, more details are covered in the comment of source ode
