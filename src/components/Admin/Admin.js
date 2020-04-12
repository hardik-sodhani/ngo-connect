import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import UploadFile from '../Controls/UploadFile'
import xlsx from 'xlsx'

/* list of supported file types */
const SupportedFileTypes = [
  'xlsx', 'xlsb', 'xlsm', 'xls'
].map(function (x) { return '.' + x }).join(',')

class Admin extends Component {
  constructor () {
    super()
    this.state = { loading: false }
    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleFile (file) {
    this.setState({ loading: true })
    /* Boilerplate to set up FileReader */
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString
    if (rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file)
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result
      const wb = xlsx.read(bstr, {
        type: rABS ? 'binary' : 'array',
        cellDates: true,
        cellNF: false,
        cellText: false,
        dateNF: 'YYYY-MM-DD'
      })

      const inputData = wb.SheetNames.map(sheetName => {
        const sData = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { cellDates: true, dateNF: 'YYYY-MM-DD', header: 1 })
        return {
          name: sheetName,
          headers: sData[0],
          data: sData.slice(1)
        }
      })

      console.log('To be processed inputData: ', inputData)
    }
  }

  handleChange (e) {
    const files = e.target.files
    console.log('Uploaded files:', files)
    if (files && files[0]) this.handleFile(files[0])
  }

  render () {
    return (
      <div className="m-2 col-md-6 float-right" >
        <UploadFile FileTypes={SupportedFileTypes} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default withRouter(Admin)