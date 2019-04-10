/// <reference types="Cypress" />
var os = require('../../support/selectors.js');

describe('Add ARCGIS server', function() {
  before('Login', function() {
    cy.login();
    // cy.server();

    cy.server({
      onRequest: function(xhr) {
        console.log(xhr);
        if ((xhr.request.body).includes('objectIds')) {
          console.log('responding...');
          console.log(xhr.request.body);
          console.log('xhr.response.body BEFORE BEFORE BEFORE');
          console.log(xhr.response.body);
          xhr.response.body = JSON.parse('{"displayFieldName":"STATION_TYPE","fieldAliases":{"OBJECTID":"OBJECTID","STATION_TYPE":"STATION_TYPE","ADDRESS":"ADDRESS","STATIONID":"STATIONID","GlobalID":"GlobalID"},"geometryType":"esriGeometryPoint","spatialReference":{"wkid":4326,"latestWkid":4326},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"STATION_TYPE","type":"esriFieldTypeString","alias":"STATION_TYPE","length":25},{"name":"ADDRESS","type":"esriFieldTypeString","alias":"ADDRESS","length":50},{"name":"STATIONID","type":"esriFieldTypeString","alias":"STATIONID","length":10},{"name":"GlobalID","type":"esriFieldTypeGlobalID","alias":"GlobalID","length":38}],"features":[{"attributes":{"OBJECTID":2540,"STATION_TYPE":"Aurora 10","ADDRESS":"3951 S Reservoir Rd Aurora CO 80013","STATIONID":"AFD 10","GlobalID":"{9673A2A1-981A-4D3E-BF4B-587F51708207}"},"geometry":{"x":-104.77155454050425,"y":39.644821701360698}},{"attributes":{"OBJECTID":2546,"STATION_TYPE":"Aurora 2","ADDRESS":"12600 E Hoffman Blvd Aurora CO 80011","STATIONID":"AFD 2","GlobalID":"{87D9A23D-4FC8-4032-8AE8-3C040681FB85}"},"geometry":{"x":-104.84214377609021,"y":39.728947326963933}},{"attributes":{"OBJECTID":2548,"STATION_TYPE":"Aurora 4","ADDRESS":"1110 S Quentin St Aurora CO 80012","STATIONID":"AFD 4","GlobalID":"{24CFFA19-E7DF-4B1F-8822-1178AE7116DF}"},"geometry":{"x":-104.84438645331926,"y":39.696308456549161}},{"attributes":{"OBJECTID":2549,"STATION_TYPE":"Aurora 5","ADDRESS":"1339 N Airport Blvd Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{5888B8C2-3AAF-4C60-A903-91D3D92DC2F3}"},"geometry":{"x":-104.79169009369912,"y":39.736855013149643}},{"attributes":{"OBJECTID":2550,"STATION_TYPE":"Aurora 6","ADDRESS":"15588 E Hampden Cir Aurora CO 80013","STATIONID":"AFD 6","GlobalID":"{D281002A-1643-43F2-BD1E-C9F7ED979156}"},"geometry":{"x":-104.80669524394237,"y":39.652667592662723}},{"attributes":{"OBJECTID":2551,"STATION_TYPE":"Aurora 7","ADDRESS":"2290 S Blawkhawk St Aurora CO 80014","STATIONID":"AFD 7","GlobalID":"{91A79B38-B38B-493A-BC82-A323453E4BF9}"},"geometry":{"x":-104.82360086789015,"y":39.675260205980251}},{"attributes":{"OBJECTID":2552,"STATION_TYPE":"Aurora 8","ADDRESS":"250 S Chambers Rd Aurora CO 80012","STATIONID":"AFD 8","GlobalID":"{84C0532C-FFDE-4605-8E10-3460D984471E}"},"geometry":{"x":-104.8095081297196,"y":39.710669009786287}},{"attributes":{"OBJECTID":2553,"STATION_TYPE":"Aurora 9","ADDRESS":"17200 E Mexico Ave Aurora CO 80017","STATIONID":"AFD 9","GlobalID":"{7017DB03-34B9-4FDB-BC04-AB1A9E120739}"},"geometry":{"x":-104.78587287735617,"y":39.685152600068839}},{"attributes":{"OBJECTID":2572,"STATION_TYPE":"Aurora 15","ADDRESS":"1880 S Flat Rock Trl Aurora CO 80018","STATIONID":"AFD 15","GlobalID":"{C5C2CD49-1936-41F1-B392-897BC670ABE1}"},"geometry":{"x":-104.70288405742599,"y":39.682506647339764}},{"attributes":{"OBJECTID":2574,"STATION_TYPE":"Future Aurora 5","ADDRESS":"1141 N Laredo St Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{B1245EDF-6108-46E4-AF25-26E4181A0CC4}"},"geometry":{"x":-104.80125287652915,"y":39.734282736613046}},{"attributes":{"OBJECTID":2602,"STATION_TYPE":"South Metro 22","ADDRESS":"16758 E Smoky Hill Rd Aurora CO 80015","STATIONID":"SMFR 22","GlobalID":"{A8DA6BE7-D94D-4D88-B31D-DA76437CF3DE}"},"geometry":{"x":-104.79243851333626,"y":39.62512258129599}},{"attributes":{"OBJECTID":2603,"STATION_TYPE":"South Metro 23","ADDRESS":"5405 S Riviera Way Centennial CO 80015","STATIONID":"SMFR 23","GlobalID":"{CE679760-5D57-4BAE-B0CD-40C27AF13796}"},"geometry":{"x":-104.73809878538513,"y":39.618738532975449}},{"attributes":{"OBJECTID":2604,"STATION_TYPE":"Aurora HQ","ADDRESS":"15151 E Alameda Pkwy Aurora CO 80012","STATIONID":"AFD HQ","GlobalID":"{F6C3BB99-8998-4440-8C33-C7D9B3F16E3F}"},"geometry":{"x":-104.81244837941675,"y":39.710820238928768}},{"attributes":{"OBJECTID":2606,"STATION_TYPE":"Buckley ARFF1","ADDRESS":"380 S Aspen St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF1","GlobalID":"{1E149E25-9840-4D77-A612-E5CAE5244B23}"},"geometry":{"x":-104.7694067710196,"y":39.710076192952442}},{"attributes":{"OBJECTID":2607,"STATION_TYPE":"Buckley ARFF2","ADDRESS":"545 S Silver Creek St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF2","GlobalID":"{5E896AD2-4C85-4DEB-93AC-01916494AA89}"},"geometry":{"x":-104.75048170226999,"y":39.706745429328997}}]}');
          console.log('xhr.response.body AFTER AFTER AFTER');
          console.log(xhr.response.body);
        }
      }
    });

    cy.route('**/OpenData/MapServer', 'fx:/smoke-tests/load-data-server-arcgis/mapserver.stub.xml')
        .as('Connect to server');
    cy.route('**/OpenData/MapServer?f=json', 'fx:/smoke-tests/load-data-server-arcgis/mapserver?f=json.stub.json')
        .as('Get layers');
    cy.route('**/OpenData/MapServer/layers?f=json', 'fx:/smoke-tests/load-data-server-arcgis/layers?f=json.stub.json')
        .as('Get layer details');
    cy.route('**/OpenData/MapServer/export?F=image*', 'fx:/smoke-tests/load-data-server-arcgis/export.png')
        .as('Turn on layer');
    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.json')
        .as('Get feature list');
    // cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.json')
    //     .as('Get features');
  });

  it('Load data from ARCGIS server', function() {
    // Add a server
    cy.get(os.statusBar.SERVERS_BUTTON).click();
    cy.get(os.settingsDialog.Tabs.dataServers.ADD_SERVER_BUTTON).click();
    cy.get(os.importURLDialog.ENTER_A_URL_INPUT)
        .type('https://ags.auroragov.org/aurora/rest/services/OpenData/MapServer');
    cy.get(os.importURLDialog.NEXT_BUTTON).click();
    cy.get(os.addArcServerDialog.TITLE_INPUT).clear();
    cy.get(os.addArcServerDialog.TITLE_INPUT).type('Aurora ArcGIS Server');
    cy.get(os.addArcServerDialog.SAVE_BUTTON).click();
    cy.wait('@Get layer details'); // Large file, times out without a wait
    cy.get(os.settingsDialog.Tabs.dataServers.SERVER_1)
        .should('contain', 'Aurora ArcGIS Server');
    cy.get(os.settingsDialog.Tabs.dataServers.SERVER_1)
        .find(os.settingsDialog.Tabs.dataServers.SERVER_ONLINE_BADGE_WILDCARD)
        .should('be.visible');
    cy.get(os.settingsDialog.DIALOG_CLOSE).click();

    // Load a layer
    cy.get(os.Toolbar.addData.BUTTON).click();
    cy.get(os.addDataDialog.SEARCH_INPUT).type('fire station');
    cy.get(os.addDataDialog.Tree.LAYER_1).should('contain', 'Fire Stations');
    cy.get(os.addDataDialog.Tree.LAYER_1)
        .find(os.addDataDialog.Tree.LAYER_TOGGLE_SWITCH_WILDCARD)
        .should('have.class', os.addDataDialog.Tree.LAYER_IS_OFF_CLASS_WILDCARD);
    cy.get(os.addDataDialog.Tree.LAYER_1).find(os.addDataDialog.Tree.LAYER_TOGGLE_SWITCH_WILDCARD).click();
    cy.get(os.addDataDialog.Tree.LAYER_1)
        .find(os.addDataDialog.Tree.LAYER_TOGGLE_SWITCH_WILDCARD)
        .should('have.class', os.addDataDialog.Tree.LAYER_IS_ON_CLASS_WILDCARD);
    cy.get(os.addDataDialog.CLOSE_BUTTON).click();
    cy.get(os.addDataDialog.DIALOG).should('not.exist');
    cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4).should('contain', 'Fire Stations Features (0)');

    // Import and activate a query area
    cy.get(os.layersDialog.Tabs.Areas.TAB).click();
    cy.get(os.layersDialog.Tabs.Areas.Import.BUTTON).click();
    cy.upload('smoke-tests/load-data-server-arcgis/test-area.geojson');
    cy.get(os.importDataDialog.NEXT_BUTTON).click();
    cy.get(os.geoJSONAreaImportDialog.Tabs.areaOptions.TITLE_COLUMN_INPUT).should('be.visible');
    cy.get(os.geoJSONAreaImportDialog.DONE_BUTTON).click();
    cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1).should('contain', 'temp area 5');
    cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1).rightClick();
    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.ZOOM).click();
    cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1).rightClick();
    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.Query.LOAD).click();

    // cy.wait('@Get feature list')
    //     .then((xhr) => {
    //       if ((xhr.request.body).includes('objectIds')) {
    //         console.log('responding...111111');
    //         console.log(xhr.request.body);
    //         xhr.response.body = '{"displayFieldName":"STATION_TYPE","fieldAliases":{"OBJECTID":"OBJECTID","STATION_TYPE":"STATION_TYPE","ADDRESS":"ADDRESS","STATIONID":"STATIONID","GlobalID":"GlobalID"},"geometryType":"esriGeometryPoint","spatialReference":{"wkid":4326,"latestWkid":4326},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"STATION_TYPE","type":"esriFieldTypeString","alias":"STATION_TYPE","length":25},{"name":"ADDRESS","type":"esriFieldTypeString","alias":"ADDRESS","length":50},{"name":"STATIONID","type":"esriFieldTypeString","alias":"STATIONID","length":10},{"name":"GlobalID","type":"esriFieldTypeGlobalID","alias":"GlobalID","length":38}],"features":[{"attributes":{"OBJECTID":2540,"STATION_TYPE":"Aurora 10","ADDRESS":"3951 S Reservoir Rd Aurora CO 80013","STATIONID":"AFD 10","GlobalID":"{9673A2A1-981A-4D3E-BF4B-587F51708207}"},"geometry":{"x":-104.77155454050425,"y":39.644821701360698}},{"attributes":{"OBJECTID":2546,"STATION_TYPE":"Aurora 2","ADDRESS":"12600 E Hoffman Blvd Aurora CO 80011","STATIONID":"AFD 2","GlobalID":"{87D9A23D-4FC8-4032-8AE8-3C040681FB85}"},"geometry":{"x":-104.84214377609021,"y":39.728947326963933}},{"attributes":{"OBJECTID":2548,"STATION_TYPE":"Aurora 4","ADDRESS":"1110 S Quentin St Aurora CO 80012","STATIONID":"AFD 4","GlobalID":"{24CFFA19-E7DF-4B1F-8822-1178AE7116DF}"},"geometry":{"x":-104.84438645331926,"y":39.696308456549161}},{"attributes":{"OBJECTID":2549,"STATION_TYPE":"Aurora 5","ADDRESS":"1339 N Airport Blvd Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{5888B8C2-3AAF-4C60-A903-91D3D92DC2F3}"},"geometry":{"x":-104.79169009369912,"y":39.736855013149643}},{"attributes":{"OBJECTID":2550,"STATION_TYPE":"Aurora 6","ADDRESS":"15588 E Hampden Cir Aurora CO 80013","STATIONID":"AFD 6","GlobalID":"{D281002A-1643-43F2-BD1E-C9F7ED979156}"},"geometry":{"x":-104.80669524394237,"y":39.652667592662723}},{"attributes":{"OBJECTID":2551,"STATION_TYPE":"Aurora 7","ADDRESS":"2290 S Blawkhawk St Aurora CO 80014","STATIONID":"AFD 7","GlobalID":"{91A79B38-B38B-493A-BC82-A323453E4BF9}"},"geometry":{"x":-104.82360086789015,"y":39.675260205980251}},{"attributes":{"OBJECTID":2552,"STATION_TYPE":"Aurora 8","ADDRESS":"250 S Chambers Rd Aurora CO 80012","STATIONID":"AFD 8","GlobalID":"{84C0532C-FFDE-4605-8E10-3460D984471E}"},"geometry":{"x":-104.8095081297196,"y":39.710669009786287}},{"attributes":{"OBJECTID":2553,"STATION_TYPE":"Aurora 9","ADDRESS":"17200 E Mexico Ave Aurora CO 80017","STATIONID":"AFD 9","GlobalID":"{7017DB03-34B9-4FDB-BC04-AB1A9E120739}"},"geometry":{"x":-104.78587287735617,"y":39.685152600068839}},{"attributes":{"OBJECTID":2572,"STATION_TYPE":"Aurora 15","ADDRESS":"1880 S Flat Rock Trl Aurora CO 80018","STATIONID":"AFD 15","GlobalID":"{C5C2CD49-1936-41F1-B392-897BC670ABE1}"},"geometry":{"x":-104.70288405742599,"y":39.682506647339764}},{"attributes":{"OBJECTID":2574,"STATION_TYPE":"Future Aurora 5","ADDRESS":"1141 N Laredo St Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{B1245EDF-6108-46E4-AF25-26E4181A0CC4}"},"geometry":{"x":-104.80125287652915,"y":39.734282736613046}},{"attributes":{"OBJECTID":2602,"STATION_TYPE":"South Metro 22","ADDRESS":"16758 E Smoky Hill Rd Aurora CO 80015","STATIONID":"SMFR 22","GlobalID":"{A8DA6BE7-D94D-4D88-B31D-DA76437CF3DE}"},"geometry":{"x":-104.79243851333626,"y":39.62512258129599}},{"attributes":{"OBJECTID":2603,"STATION_TYPE":"South Metro 23","ADDRESS":"5405 S Riviera Way Centennial CO 80015","STATIONID":"SMFR 23","GlobalID":"{CE679760-5D57-4BAE-B0CD-40C27AF13796}"},"geometry":{"x":-104.73809878538513,"y":39.618738532975449}},{"attributes":{"OBJECTID":2604,"STATION_TYPE":"Aurora HQ","ADDRESS":"15151 E Alameda Pkwy Aurora CO 80012","STATIONID":"AFD HQ","GlobalID":"{F6C3BB99-8998-4440-8C33-C7D9B3F16E3F}"},"geometry":{"x":-104.81244837941675,"y":39.710820238928768}},{"attributes":{"OBJECTID":2606,"STATION_TYPE":"Buckley ARFF1","ADDRESS":"380 S Aspen St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF1","GlobalID":"{1E149E25-9840-4D77-A612-E5CAE5244B23}"},"geometry":{"x":-104.7694067710196,"y":39.710076192952442}},{"attributes":{"OBJECTID":2607,"STATION_TYPE":"Buckley ARFF2","ADDRESS":"545 S Silver Creek St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF2","GlobalID":"{5E896AD2-4C85-4DEB-93AC-01916494AA89}"},"geometry":{"x":-104.75048170226999,"y":39.706745429328997}}]}';
    //       } else {
    //         console.log('not responding1111111');
    //         console.log(xhr.request.body);
    //       }
    //     });

    // cy.wait('@Get feature list')
    //     .then((xhr) => {
    //       if ((xhr.request.body).includes('objectIds')) {
    //         console.log('responding...222222');
    //         console.log(xhr.request.body);
    //         console.log('xhr.response.body BEFORE BEFORE BEFORE');
    //         console.log(xhr.response.body);
    //         xhr.response.body = JSON.parse('{"displayFieldName":"STATION_TYPE","fieldAliases":{"OBJECTID":"OBJECTID","STATION_TYPE":"STATION_TYPE","ADDRESS":"ADDRESS","STATIONID":"STATIONID","GlobalID":"GlobalID"},"geometryType":"esriGeometryPoint","spatialReference":{"wkid":4326,"latestWkid":4326},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"STATION_TYPE","type":"esriFieldTypeString","alias":"STATION_TYPE","length":25},{"name":"ADDRESS","type":"esriFieldTypeString","alias":"ADDRESS","length":50},{"name":"STATIONID","type":"esriFieldTypeString","alias":"STATIONID","length":10},{"name":"GlobalID","type":"esriFieldTypeGlobalID","alias":"GlobalID","length":38}],"features":[{"attributes":{"OBJECTID":2540,"STATION_TYPE":"Aurora 10","ADDRESS":"3951 S Reservoir Rd Aurora CO 80013","STATIONID":"AFD 10","GlobalID":"{9673A2A1-981A-4D3E-BF4B-587F51708207}"},"geometry":{"x":-104.77155454050425,"y":39.644821701360698}},{"attributes":{"OBJECTID":2546,"STATION_TYPE":"Aurora 2","ADDRESS":"12600 E Hoffman Blvd Aurora CO 80011","STATIONID":"AFD 2","GlobalID":"{87D9A23D-4FC8-4032-8AE8-3C040681FB85}"},"geometry":{"x":-104.84214377609021,"y":39.728947326963933}},{"attributes":{"OBJECTID":2548,"STATION_TYPE":"Aurora 4","ADDRESS":"1110 S Quentin St Aurora CO 80012","STATIONID":"AFD 4","GlobalID":"{24CFFA19-E7DF-4B1F-8822-1178AE7116DF}"},"geometry":{"x":-104.84438645331926,"y":39.696308456549161}},{"attributes":{"OBJECTID":2549,"STATION_TYPE":"Aurora 5","ADDRESS":"1339 N Airport Blvd Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{5888B8C2-3AAF-4C60-A903-91D3D92DC2F3}"},"geometry":{"x":-104.79169009369912,"y":39.736855013149643}},{"attributes":{"OBJECTID":2550,"STATION_TYPE":"Aurora 6","ADDRESS":"15588 E Hampden Cir Aurora CO 80013","STATIONID":"AFD 6","GlobalID":"{D281002A-1643-43F2-BD1E-C9F7ED979156}"},"geometry":{"x":-104.80669524394237,"y":39.652667592662723}},{"attributes":{"OBJECTID":2551,"STATION_TYPE":"Aurora 7","ADDRESS":"2290 S Blawkhawk St Aurora CO 80014","STATIONID":"AFD 7","GlobalID":"{91A79B38-B38B-493A-BC82-A323453E4BF9}"},"geometry":{"x":-104.82360086789015,"y":39.675260205980251}},{"attributes":{"OBJECTID":2552,"STATION_TYPE":"Aurora 8","ADDRESS":"250 S Chambers Rd Aurora CO 80012","STATIONID":"AFD 8","GlobalID":"{84C0532C-FFDE-4605-8E10-3460D984471E}"},"geometry":{"x":-104.8095081297196,"y":39.710669009786287}},{"attributes":{"OBJECTID":2553,"STATION_TYPE":"Aurora 9","ADDRESS":"17200 E Mexico Ave Aurora CO 80017","STATIONID":"AFD 9","GlobalID":"{7017DB03-34B9-4FDB-BC04-AB1A9E120739}"},"geometry":{"x":-104.78587287735617,"y":39.685152600068839}},{"attributes":{"OBJECTID":2572,"STATION_TYPE":"Aurora 15","ADDRESS":"1880 S Flat Rock Trl Aurora CO 80018","STATIONID":"AFD 15","GlobalID":"{C5C2CD49-1936-41F1-B392-897BC670ABE1}"},"geometry":{"x":-104.70288405742599,"y":39.682506647339764}},{"attributes":{"OBJECTID":2574,"STATION_TYPE":"Future Aurora 5","ADDRESS":"1141 N Laredo St Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{B1245EDF-6108-46E4-AF25-26E4181A0CC4}"},"geometry":{"x":-104.80125287652915,"y":39.734282736613046}},{"attributes":{"OBJECTID":2602,"STATION_TYPE":"South Metro 22","ADDRESS":"16758 E Smoky Hill Rd Aurora CO 80015","STATIONID":"SMFR 22","GlobalID":"{A8DA6BE7-D94D-4D88-B31D-DA76437CF3DE}"},"geometry":{"x":-104.79243851333626,"y":39.62512258129599}},{"attributes":{"OBJECTID":2603,"STATION_TYPE":"South Metro 23","ADDRESS":"5405 S Riviera Way Centennial CO 80015","STATIONID":"SMFR 23","GlobalID":"{CE679760-5D57-4BAE-B0CD-40C27AF13796}"},"geometry":{"x":-104.73809878538513,"y":39.618738532975449}},{"attributes":{"OBJECTID":2604,"STATION_TYPE":"Aurora HQ","ADDRESS":"15151 E Alameda Pkwy Aurora CO 80012","STATIONID":"AFD HQ","GlobalID":"{F6C3BB99-8998-4440-8C33-C7D9B3F16E3F}"},"geometry":{"x":-104.81244837941675,"y":39.710820238928768}},{"attributes":{"OBJECTID":2606,"STATION_TYPE":"Buckley ARFF1","ADDRESS":"380 S Aspen St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF1","GlobalID":"{1E149E25-9840-4D77-A612-E5CAE5244B23}"},"geometry":{"x":-104.7694067710196,"y":39.710076192952442}},{"attributes":{"OBJECTID":2607,"STATION_TYPE":"Buckley ARFF2","ADDRESS":"545 S Silver Creek St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF2","GlobalID":"{5E896AD2-4C85-4DEB-93AC-01916494AA89}"},"geometry":{"x":-104.75048170226999,"y":39.706745429328997}}]}');
    //         console.log('xhr.response.body AFTER AFTER AFTER');
    //         console.log(xhr.response.body);
    //       } else {
    //         console.log('not responding2222222');
    //         console.log(xhr.request.body);
    //       }
    //     });


      // let request: any = xhr.request.body;
      // let response: any = xhr.response.body;

      // response = response.body;

      // console.log('response', response)
      // console.log('request', request)

    cy.get(os.layersDialog.Tabs.Layers.TAB).click();
    cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4).should('contain', 'Fire Station');
    cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4)
        .find(os.layersDialog.Tabs.Layers.Tree.Type.featureLayer.FEATURE_COUNT_TEXT_WILDCARD)
        .should('not.contain', 'Loading...'); // wait for feature count value to stabilize
    cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4)
        .find(os.layersDialog.Tabs.Layers.Tree.Type.featureLayer.FEATURE_COUNT_TEXT_WILDCARD)
        .should('not.contain', '(0)'); // wait for feature count value to stabilize

    // cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4)
    //     .find(os.layersDialog.Tabs.Layers.Tree.Type.featureLayer.FEATURE_COUNT_TEXT_WILDCARD)
    //     .invoke('text')
    //     .should('match', /\([1-9]\d{0,3}\)/); // Any number 1-9999, surrounded by ()

    // // Clean up
    // cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4)
    //     .find(os.layersDialog.Tabs.Layers.Tree.Type.featureLayer.FEATURE_COUNT_TEXT_WILDCARD)
    //     .invoke('text')
    //     .should('match', /\([1-9]\d{0,3}\)/); // Any number 1-9999, surrounded by ()
    // cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4).click();
    // cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4)
    //     .find(os.layersDialog.Tabs.Layers.Tree.Type.featureLayer.REMOVE_LAYER_BUTTON_WILDCARD)
    //     .click();
    // cy.get(os.layersDialog.Tabs.Layers.Tree.LAYER_4).should('not.contain', 'Fire Stations Features');
    // cy.get(os.layersDialog.Tabs.Areas.TAB).click();
    // cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1).click();
    // cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1)
    //     .find(os.layersDialog.Tabs.Areas.Tree.REMOVE_AREA_BUTTON_WILDCARD)
    //     .click();
    // cy.get(os.layersDialog.Tabs.Areas.Tree.AREA_1).should('not.contain', 'temp area 5');
    // cy.get(os.layersDialog.Tabs.Layers.TAB).click();
    // cy.get(os.statusBar.SERVERS_BUTTON).click();
    // cy.get(os.settingsDialog.Tabs.dataServers.SERVER_1)
    //     .find(os.settingsDialog.Tabs.dataServers.DELETE_SERVER_BUTTON_WILDCARD)
    //     .click();
    // cy.get(os.settingsDialog.Tabs.dataServers.SERVER_1)
    //     .should('not.contain', 'Aurora ArcGIS Server');
    // cy.get(os.settingsDialog.CLOSE_BUTTON).click();
  });
});
