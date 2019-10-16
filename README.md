本示例合约展示了如何在Action中传递复杂的参数.  

## 定义参数结构
在`ComplicateParams.ts`文件中, 定义了两个类`ComplicateParams`和`SimpleParams`, 它们的定义如下:  
**ComplicateParams**  
```typescript
export class ComplicateParams implements Serializable {
    units: Units[];
    dropItems: DropItems[];
    dropToken: DropToken;

    constructor() {
        this.units = new Array<Units>();
        this.dropItems = new Array<DropItems>();
        this.dropToken = new DropToken();
    }

    say(): string {
        let v = "units.length = " + intToString(this.units.length);
        v += "; dropItems.length = " + intToString(this.dropItems.length);
        v += "; dropToken.high = " + intToString(this.dropToken.high);
        return v;
    }
}
```
它表示以下JSON结构:  
```json
{
    "units":[
        {
            "unitId":18,
            "level":3
        },
        {
            "unitId":13,
            "level":3
        },
        {
            "unitId":18,
            "level":3
        }
    ],
    "dropItems":[
        {
            "itemId":1,
            "chance":4
        }
    ],
    "dropToken":{
        "low":22,
        "high":24
    }
}
```

**SimpleParams**  
```typescript
export class SimpleParams implements Serializable {
    x: u8;
    y: u8;
    z: u8;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    say(): string {
        let json = "{";
        json += jsonKey("x") + jsonValue(this.x) + ",";
        json += jsonKey("y") + jsonValue(this.y) + ",";
        json += jsonKey("z") + jsonValue(this.z);
        json += "}";
        return json;
    }
}
```
它表示以下的JSON结构:  
```json
{
    "x":100,
    "y":200,
    "z":255
}
```


## 调用MyContract.complicateParams(cp: ComplicateParams, sp: SimpleParams)方法

<u>假定合约已经部署到了jack账号.</u>
### 使用命令行调用
```bash
./clultrain push action jack complicateParams '{"cp":{"units":[{"unitId":18,"level":3},{"unitId":13,"level":3},{"unitId":18,"level":3}],"dropItems":[{"itemId":1,"chance":4}],"dropToken":{"low":22,"high":24}},"sp":{"x":100,"y":200,"z":255}}' -p jack
```

它的返回结果应该如下:
```bash
executed transaction: 8a9e8704339fad149d47f75321cb9b95f709fc7dc22937dee58e74e20ad021bb  120 bytes  946 us
#          jack <= jack::complicateParams       {"cp":{"units":[{"unitId":18,"level":3},{"unitId":13,"level":3},{"unitId":18,"level":3}],"dropItems":[{"itemId":1,"chance":4}],"dropToken":{"low":22,"high":24}},"sp":{"x":100,"y":200,"z":255}}  => units.length = 3; dropItems.length = 1; dropToken.high = 24  {"x":100,"y":200,"z":255}
```

### 使用U3调用
// TODO(wait for ben to finish this doc.)