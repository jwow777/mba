import './index.scss';
import Api from './components/Api';
import List from './components/List';
import Section from './components/Section';
import Module from './components/Module';
import ModuleListItem from './components/ModuleListItem';
// import obj from './utils.json;'

const api = new Api({
  baseUrl: "https://ipo-cp.ru/"
});

const contentElement = document.querySelector(".content");
const sectionElement = document.querySelector("#section-template");
const moduleListElement = document.querySelector("#module-listitem-template");
const moduleElement = document.querySelector("#module-template");

const createModuleListItem = (dataModuleListItem) => {
  const newModuleListItem = new ModuleListItem(dataModuleListItem, moduleListElement).generateModuleListItem();
  return newModuleListItem;
};

const createModule = (dataModule) => {
  const newModule = new Module(dataModule, moduleElement, createModuleListItem).generateModule();
  return newModule;
};

const createSection = (dataSection) => {
  const newSection = new Section(dataSection, sectionElement, createModule).generateSection();
  return newSection;
};

const sectionList = new List(data => sectionList.addItemArr(createSection(data)), contentElement);

api.getData()
  .then((res) => sectionList.renderItems([res.data[0], res.data[5], res.data[10], res.data[20], res.data[30]]))
  .catch((err) => console.log(err));

// offline
// const res = obj;
// sectionList.renderItems([res.data[0], res.data[5], res.data[10], res.data[20], res.data[30]]);