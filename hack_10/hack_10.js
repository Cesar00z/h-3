/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result = modObject(foo);
function modObject(obj) {
    delete obj.alias  
    return {
        ...obj,
        name: convertCapital(obj.name),
        roles: addRoles(obj),
        skills: modSkills(obj),
        levels: modLevels(levels),
    }
    function convertCapital(str) {
        return str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    function addRoles({roles}) {
        roles = roles.map(role => role.toUpperCase());
        roles.push(roleSuperUser, roleUser);
        roles
        return roles
    }
    function modSkills({skills: skills1}) {
        [sk1, sk2, sk3, sk4] = skills;
        let i = 0;
        let limite = skills1.length - 1;
        let mitad = limite / 2 + 2;
        for (; i <= limite; i ++) {
            if (i == 0) skills1.unshift(sk1);
            else if (i == 1) skills1.splice(i, 0 , sk2);
            else if (i == mitad) skills1.splice(i, 0, sk3);
            else if (i == limite) skills1.push(sk4);
        }
        skills1 = skills1.map(skill => {
            return skill == "html" ? skill.toUpperCase()
            : skill == "css" ? skill.toUpperCase()
            : convertCapital(skill)
        });
        return skills1
    }
    function modLevels(levels) {
        levels = levels.map(level => {
            let r = level.LEVEL.replace("-","").toUpperCase();
            r
            return {
                LEVEL: r,
            };
        });
        return levels;
    }
}

//export result
module.exports = result; 