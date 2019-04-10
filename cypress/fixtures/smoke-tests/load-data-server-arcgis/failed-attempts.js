cy.server({
  onRequest: (xhr) => {
    console.log(xhr);
    if ((xhr.request.body).includes('geometryType')) {
      xhr.url = xhr.url + '/getFeatureList';
    }

    if ((xhr.request.body).includes('objectIds')) {
      xhr.url = xhr.url + '/getFeatureDetails';
    }
  },
  onResponse: (xhr) => {
    if ((xhr.request.body).includes('objectIds')) {
      console.log('responding...');
      xhr.response = '{"displayFieldName":"STATION_TYPE","fieldAliases":{"OBJECTID":"OBJECTID","STATION_TYPE":"STATION_TYPE","ADDRESS":"ADDRESS","STATIONID":"STATIONID","GlobalID":"GlobalID"},"geometryType":"esriGeometryPoint","spatialReference":{"wkid":4326,"latestWkid":4326},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"STATION_TYPE","type":"esriFieldTypeString","alias":"STATION_TYPE","length":25},{"name":"ADDRESS","type":"esriFieldTypeString","alias":"ADDRESS","length":50},{"name":"STATIONID","type":"esriFieldTypeString","alias":"STATIONID","length":10},{"name":"GlobalID","type":"esriFieldTypeGlobalID","alias":"GlobalID","length":38}],"features":[{"attributes":{"OBJECTID":2540,"STATION_TYPE":"Aurora 10","ADDRESS":"3951 S Reservoir Rd Aurora CO 80013","STATIONID":"AFD 10","GlobalID":"{9673A2A1-981A-4D3E-BF4B-587F51708207}"},"geometry":{"x":-104.77155454050425,"y":39.644821701360698}},{"attributes":{"OBJECTID":2546,"STATION_TYPE":"Aurora 2","ADDRESS":"12600 E Hoffman Blvd Aurora CO 80011","STATIONID":"AFD 2","GlobalID":"{87D9A23D-4FC8-4032-8AE8-3C040681FB85}"},"geometry":{"x":-104.84214377609021,"y":39.728947326963933}},{"attributes":{"OBJECTID":2548,"STATION_TYPE":"Aurora 4","ADDRESS":"1110 S Quentin St Aurora CO 80012","STATIONID":"AFD 4","GlobalID":"{24CFFA19-E7DF-4B1F-8822-1178AE7116DF}"},"geometry":{"x":-104.84438645331926,"y":39.696308456549161}},{"attributes":{"OBJECTID":2549,"STATION_TYPE":"Aurora 5","ADDRESS":"1339 N Airport Blvd Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{5888B8C2-3AAF-4C60-A903-91D3D92DC2F3}"},"geometry":{"x":-104.79169009369912,"y":39.736855013149643}},{"attributes":{"OBJECTID":2550,"STATION_TYPE":"Aurora 6","ADDRESS":"15588 E Hampden Cir Aurora CO 80013","STATIONID":"AFD 6","GlobalID":"{D281002A-1643-43F2-BD1E-C9F7ED979156}"},"geometry":{"x":-104.80669524394237,"y":39.652667592662723}},{"attributes":{"OBJECTID":2551,"STATION_TYPE":"Aurora 7","ADDRESS":"2290 S Blawkhawk St Aurora CO 80014","STATIONID":"AFD 7","GlobalID":"{91A79B38-B38B-493A-BC82-A323453E4BF9}"},"geometry":{"x":-104.82360086789015,"y":39.675260205980251}},{"attributes":{"OBJECTID":2552,"STATION_TYPE":"Aurora 8","ADDRESS":"250 S Chambers Rd Aurora CO 80012","STATIONID":"AFD 8","GlobalID":"{84C0532C-FFDE-4605-8E10-3460D984471E}"},"geometry":{"x":-104.8095081297196,"y":39.710669009786287}},{"attributes":{"OBJECTID":2553,"STATION_TYPE":"Aurora 9","ADDRESS":"17200 E Mexico Ave Aurora CO 80017","STATIONID":"AFD 9","GlobalID":"{7017DB03-34B9-4FDB-BC04-AB1A9E120739}"},"geometry":{"x":-104.78587287735617,"y":39.685152600068839}},{"attributes":{"OBJECTID":2572,"STATION_TYPE":"Aurora 15","ADDRESS":"1880 S Flat Rock Trl Aurora CO 80018","STATIONID":"AFD 15","GlobalID":"{C5C2CD49-1936-41F1-B392-897BC670ABE1}"},"geometry":{"x":-104.70288405742599,"y":39.682506647339764}},{"attributes":{"OBJECTID":2574,"STATION_TYPE":"Future Aurora 5","ADDRESS":"1141 N Laredo St Aurora CO 80011","STATIONID":"AFD 5","GlobalID":"{B1245EDF-6108-46E4-AF25-26E4181A0CC4}"},"geometry":{"x":-104.80125287652915,"y":39.734282736613046}},{"attributes":{"OBJECTID":2602,"STATION_TYPE":"South Metro 22","ADDRESS":"16758 E Smoky Hill Rd Aurora CO 80015","STATIONID":"SMFR 22","GlobalID":"{A8DA6BE7-D94D-4D88-B31D-DA76437CF3DE}"},"geometry":{"x":-104.79243851333626,"y":39.62512258129599}},{"attributes":{"OBJECTID":2603,"STATION_TYPE":"South Metro 23","ADDRESS":"5405 S Riviera Way Centennial CO 80015","STATIONID":"SMFR 23","GlobalID":"{CE679760-5D57-4BAE-B0CD-40C27AF13796}"},"geometry":{"x":-104.73809878538513,"y":39.618738532975449}},{"attributes":{"OBJECTID":2604,"STATION_TYPE":"Aurora HQ","ADDRESS":"15151 E Alameda Pkwy Aurora CO 80012","STATIONID":"AFD HQ","GlobalID":"{F6C3BB99-8998-4440-8C33-C7D9B3F16E3F}"},"geometry":{"x":-104.81244837941675,"y":39.710820238928768}},{"attributes":{"OBJECTID":2606,"STATION_TYPE":"Buckley ARFF1","ADDRESS":"380 S Aspen St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF1","GlobalID":"{1E149E25-9840-4D77-A612-E5CAE5244B23}"},"geometry":{"x":-104.7694067710196,"y":39.710076192952442}},{"attributes":{"OBJECTID":2607,"STATION_TYPE":"Buckley ARFF2","ADDRESS":"545 S Silver Creek St Aurora CO 80017 (BAFB)","STATIONID":"BAFB ARFF2","GlobalID":"{5E896AD2-4C85-4DEB-93AC-01916494AA89}"},"geometry":{"x":-104.75048170226999,"y":39.706745429328997}}]}';
    }
  }

  cy.route('POST', '**/OpenData/MapServer/5/query/getFeatureList', 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.json')
        .as('Get feature list');
    cy.route('POST', '**/OpenData/MapServer/5/query/getFeatureDetails', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.json')
        .as('Get feature details');


        var requestCount = 0;

    function requestHelper() {
      var request1 = 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.txt';
      var request2 = 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.txt';
      switch (requestCount) {
        case 0:
          requestCount++;
          return request1;
        case 1:
          requestCount++;
          return request2;
        default:
          return 'unexpected';
      }
    }
    cy.route('POST', '**/OpenData/MapServer/5/query', requestHelper())
        .as('Get features');


    cy.route(() => {
      var request1 = 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.txt';
      var request2 = 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.txt';
      var response;
      switch (requestCount) {
        case 0:
          requestCount++;
          response = request1;
          break;
        case 1:
          requestCount++;
          response = request2;
          break;
        default:
          response = 'unexpected';
      }
      return {
        method: 'POST',
        url: '**/OpenData/MapServer/5/query',
        response: response
      };
    });


    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.Query.LOAD).click().then(function(test) {
      cy.log('waiting on first route');
      cy.wait('@Get features').then(function() {
        cy.log('setting new route');
        cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.txt');
      });
    });

    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.Query.LOAD).click();
    cy.log('waiting on first route');
    cy.wait('@Get features');
    cy.log('setting new route');
    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.txt')
        .as('Get features');
    cy.log('waiting again');
    cy.wait('@Get features');
    cy.log('finished wait');

    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.txt').as('firstroute');
    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.Query.LOAD).click();
    cy.wait('@firstroute').then(function() {
      cy.log('setting new route');
      cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.txt');
    });

    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.json')
        .as('Get features');

    cy.route({
      method: 'POST',
      url: '**/OpenData/MapServer/5/query',
      response: '{"objectIdFieldName":"OBJECTID","objectIds":[2540,2546,2548,2549,2550,2551,2552,2553,2572,2574,2602,2603,2604,2606,2607]}',
      delay: 5000
    })
        .as('Get features');

    cy.log('setting first route');
    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-1.stub.json')
        .as('Get features');
    cy.get(os.layersDialog.Tabs.Areas.Tree.contextMenu.menuOptions.Query.LOAD).click();
    cy.log('waiting on first route');
    // cy.wait('@Get features');
    cy.log('setting new route');
    cy.route('POST', '**/OpenData/MapServer/5/query', 'fx:/smoke-tests/load-data-server-arcgis/query-2.stub.json')
        .as('Get features 2');
    cy.log('waiting again');
    cy.wait('@Get features 2');
    cy.log('finished wait');
