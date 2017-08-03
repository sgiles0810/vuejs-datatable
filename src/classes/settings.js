import objectPath from 'object-path';

class Settings {
    constructor(){
        this.properties = {
            table: {
                class: 'table table-hover table-striped',
                sorting: {
                    classes: {
                        canSort: ['sort'],
                        sortNone: ['glyphicon', 'glyphicon-sort'],
                        sortAsc: ['glyphicon', 'glyphicon-sort-by-alphabet'],
                        sortDesc: ['glyphicon', 'glyphicon-sort-by-alphabet-alt'],
                    }
                }
            },
            pager: {
                classes: {
                    pager: 'pagination',
                    selected: 'active',
                    disabled: 'disabled'
                },
                icons: {
                    previous: '&lt;',
                    next: '&gt;',
                }
            }
        };
    }

    get(path){
        return objectPath.get(this.properties, path);
    }

    set(path, value){
        objectPath.set(this.properties, path, value);

        return this;
    }

    merge(settings){
        this.properties = this._mergeObjects(this.properties, settings);

        return this;
    }

    _mergeObjects(obj_1, obj_2){
        for(var key in obj_2){

            if(typeof obj_2[key] === 'object'){
                obj_1[key] = this._mergeObjects(obj_1[key], obj_2[key]);

                continue;
            }

            obj_1[key] = obj_2[key];
        }

        return obj_1;
    }
}

export default Settings;
