var myArr = [
    {
        name: "name1",
        children: [
            {
                name: "name2",
                children: [
                    {
                        name: "name3",
                        children: [
                            {
                                name: "name4",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "name5",
        children: [
            {
                name: "name6",
                children: [
                    {
                        name: "name7",
                        children: [
                            {
                                name: "name8",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                name: "name9",
                children: [
                    {
                        name: "name10",
                        children: [
                            {
                                name: "name11",
                                children: [
                                    {}
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "name12",
        children: [
            {
                name: "name13",
                children: [
                    {
                        name: "name14",
                        children: [
                            {
                                name: "name15",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

var result = [];  


function myfunc(arr) {

    if (arr.length != 0) {
        arr.forEach((obj) => {
            if (typeof obj === "object" && obj.children != undefined) {
                result.push(obj.name);
                if (obj.children.length != 0) {
                    myfunc(obj.children);
                }
            }
        })
    }
};


myfunc(myArr);
console.log(result);
