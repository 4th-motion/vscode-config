#!/usr/bin/env node
/* eslint-disable no-console, consistent-return */
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

const VSCODE_FOLDERNAME = '.vscode'

if (!fs.existsSync(VSCODE_FOLDERNAME)) {
  fs.mkdir(VSCODE_FOLDERNAME, () => {
    console.log(chalk`{bold.magenta [ADDED]  } {bold ${VSCODE_FOLDERNAME}/}`)
  })
}

const getContent = (name, filePath, showError = true) => {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    if (error.code === 'ENOENT' && showError) {
      console.error(chalk`{bold.red [ERROR]  } no ${name}.json was found in {underline ${filePath}}.`)
      process.exit(1)
    } else {
      return null
    }
  }
}

// files we want to copy from this repository under .vscode/
const files = ['settings', 'extensions']

files.forEach(async (name, index) => {
  const filePath = `${VSCODE_FOLDERNAME}/${name}.json`
  const src = path.join(__dirname, filePath)
  const dest = path.join(process.cwd(), filePath)

  if (src === dest) return

  // merge both json files and overwrite old settings when possible
  const newContent = getContent(name, src)
  const oldContent = getContent(name, dest, false)

  const newJSON = newContent ? JSON.parse(newContent) : null
  const oldJSON = oldContent ? JSON.parse(oldContent) : null

  const mergedJSON = oldJSON ? Object.assign(oldJSON, newJSON) : newJSON

  fs.writeFileSync(dest, JSON.stringify(mergedJSON, null, '  '), 'utf-8')

  if (index === files.length - 1) {
    console.log(chalk`{bold.green [SUCCESS]} VSCode settings imported!`)
  }
})
