import React from 'react';
import {
  PivotGrid,
  FieldChooser,
  Scrolling,
  Export
} from 'devextreme-react/pivot-grid';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { Popup } from 'devextreme-react/popup';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { createStore } from 'devextreme-aspnet-data-nojquery';
//import CustomStore from 'devextreme/data/custom_store';

/*
import Chart, {
  AdaptiveLayout,
  CommonSeriesSettings,
  Size,
  Tooltip
} from 'devextreme-react/chart';
*/

//import { wasteData } from './data.js';

//var dataSource = null;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      popupTitle: '',
      drillDownDataSource: null,
      popupVisible: false
      //wasteData: null
    };
    this.onCellClick = this.onCellClick.bind(this);
    this.onHiding = this.onHiding.bind(this);
    this.onShown = this.onShown.bind(this);
    this.getDataGridInstance = this.getDataGridInstance.bind(this);

    /*
    fetch('http://localhost:3000/dx-data.json')
      .then(resp => resp.json())
      .then(data => {
        console.log("data has been fetched");
        this.setState({wasteData: data});
        console.log("wasteData[0].area=" + this.state.wasteData[0].area);
      });
    */
  }

/*
  componentDidMount() {
    // this will fail because the Chart & PivotGrid aren't available when this is called
      this._pivotGrid.bindChart(this._chart, {
        dataFieldsDisplayMode: 'splitPanes',
        alternateDataFields: false
      });
  }
*/

  render() {
    /*
    if (this.state.wasteData==null) {
      return "loading...";
    }

    if (dataSource==null) {
      dataSource = buildDataSource(this.state.wasteData);
    }
    */

    let { drillDownDataSource, popupTitle, popupVisible } = this.state;

    /*
      To be put between <React.Fragment> and <PivotGrid> once ready for it!...
        see:  https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview/React/SoftBlue/

        <Chart ref={(ref) => this._chart = ref.instance}>
          <Size height={300} />
          <Tooltip enabled={true} />
          <CommonSeriesSettings type="line" />
          <AdaptiveLayout width={500} />
        </Chart>
    */

    return (
      <React.Fragment>
        <PivotGrid
          id="pivotGrid"
          allowSortingBySummary={true}
          allowSorting={true}
          allowFiltering={true}
          allowExpandAll={true}
          height={560}
          showBorders={true}
          dataSource={dataSource}
          onCellClick={this.onCellClick}
          showColumnGrandTotals={false}
          showRowGrandTotals={false}
          //rowHeaderLayout={"tree"}
          //hideEmptySummaryCells={true}
          //ref={(ref) => this._pivotGrid = ref.instance}
        >
          <FieldChooser enabled={true} />
          <Scrolling mode="virtual" />
          <Export enabled={true} allowExportSelectedData={true} fileName="waste-data" />
        </PivotGrid>
        <Popup
          visible={popupVisible}
          title={popupTitle}
          onHiding={this.onHiding}
          onShown={this.onShown}
        >
          <DataGrid
            dataSource={drillDownDataSource}
            ref={this.getDataGridInstance}
          >
            <Column dataField="year" dataType="year" />
            <Column dataField="area" />
            <Column dataField="endstate" />
            <Column dataField="material" />
            <Column dataField="tonnes" dataType="number" format="decimal" />
            <Column dataField="tonnesPerCitizen" dataType="number" format="decimal" />
            <Column dataField="tonnesPerHousehold" dataType="number" format="decimal" />
          </DataGrid>
        </Popup>
      </React.Fragment>
    );
  }

  getDataGridInstance(ref) {
    this.dataGrid = ref.instance;
  }

  onCellClick(e) {
    if (e.area === 'data') {
      var pivotGridDataSource = e.component.getDataSource(),
        rowPathLength = e.cell.rowPath.length,
        rowPathName = e.cell.rowPath[rowPathLength - 1];

      this.setState({
        popupTitle: `${rowPathName ? rowPathName : 'Total'} Drill Down Data`,
        drillDownDataSource: pivotGridDataSource.createDrillDownDataSource(e.cell),
        popupVisible: true
      });
    }
  }

  onHiding() {
    this.setState({
      popupVisible: false
    });
  }

  onShown() {
    this.dataGrid.updateDimensions();
  }
}

/* no longer used, loading via the createStore fn instead
function buildDataSource(data) {
  return new PivotGridDataSource({
  fields: [{
    caption: 'Area',
    width: 90,
    dataField: 'area',
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Scotland'
    ]
  },
  {
    caption: 'End state',
    width: 90,
    dataField: 'endState',
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Waste Generated',
      'Other Diversion (pre 2014 method)', 
      'Recycled (pre 2014 method)'
    ]
  }, {
    caption: 'Material',
    dataField: 'material',
    width: 90,
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Total Waste'
    ]
  }, {
    dataField: 'year',
    dataType: 'year',
    area: 'column'
  }, {
    caption: 'Tonnes',
    dataField: 'tonnes',
    dataType: 'number',
    summaryType: 'sum',
    format: 'decimal'
  },
  {
    caption: 'Tonnes per citizen',
    dataField: 'tonnesPerCitizen',
    dataType: 'number',
    summaryType: 'sum',
    format: {
      precision: 6,
      type: "fixedPoint"           
    },
    area: 'data'
  },
  {
    caption: 'Tonnes per household',
    dataField: 'tonnesPerHousehold',
    dataType: 'number',
    summaryType: 'sum',
    format: {
      precision: 6,
      type: "fixedPoint"           
    },
    area: 'data'
  }],
  store: data
});
}
*/

const dataSource =
  new PivotGridDataSource({
  fields: [{
    caption: 'Area',
    width: 90,
    dataField: 'area',
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Scotland'
    ]
  },
  {
    caption: 'End state',
    width: 90,
    dataField: 'endState',
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Waste Generated',
      'Other Diversion (pre 2014 method)', 
      'Recycled (pre 2014 method)'
    ]
  }, {
    caption: 'Material',
    dataField: 'material',
    width: 90,
    area: 'row',
    filterType: 'exclude',
    filterValues: [
      'Total Waste'
    ]
  }, {
    dataField: 'year',
    dataType: 'year',
    area: 'column'
  }, {
    caption: 'Tonnes',
    dataField: 'tonnes',
    dataType: 'number',
    summaryType: 'sum',
    format: 'decimal'
  },
  {
    caption: 'Tonnes per citizen',
    dataField: 'tonnesPerCitizen',
    dataType: 'number',
    summaryType: 'sum',
    format: {
      precision: 6,
      type: "fixedPoint"           
    },
    area: 'data'
  },
  {
    caption: 'Tonnes per household',
    dataField: 'tonnesPerHousehold',
    dataType: 'number',
    summaryType: 'sum',
    format: {
      precision: 6,
      type: "fixedPoint"           
    },
    area: 'data'
  }],
  store: createStore({
    loadUrl: 'http://localhost:3000/dx-data.json'
  })
});


export default App;




