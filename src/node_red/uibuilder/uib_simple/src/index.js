/* jshint browser: true, esversion: 5, asi: true */
/*globals Vue, uibuilder */
// @ts-nocheck
/*
  Copyright (c) 2019 Julian Knight (Totally Information)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
'use strict'

/** @see https://github.com/TotallyInformation/node-red-contrib-uibuilder/wiki/Front-End-Library---available-properties-and-methods */

// eslint-disable-next-line no-unused-vars
var app1 = new Vue({
    // The HTML element to attach to
	el: '#app',
	/** Pre-defined data
	 *  Anything defined here can be used in the HTML
	 *  if you update it, the HTML will automatically update
	 */
	data: {
		msg: "Hello UIbuilder",
	},

    // This is called when Vue is fully loaded
	mounted: function() {
	    // Start up uibuilder
		uibuilder.start()
		
		// Keep a convenient reference to the Vue app
		var vueApp = this

        /** Triggered when the node on the Node-RED server
         *  recieves a (non-control) msg
         */
		uibuilder.onChange('msg', function(msg) {
			vueApp.msg = "Hello " + msg.payload
		})

		// Send message back to node-red
		// uibuilder.send({payload:'some message'})

		// Triggered on reciept of a control message from node-red
		//uibuilder.onChange('ctrlMsg', function(msg) {
		//    console.log(msg)
		//})
	},
	
}) // --- End of app1 --- //

// EOF