#Superpowers EasyStarJS plugin

This plugin for [Superpowers, the extensible HTML5 2D+3D game engine](http://sparklinlabs.com) brings a EasyStarJS path finding

* [EasyStarJS website](http://www.easystarjs.com/)
* [EasyStarJS repository](https://github.com/prettymuchbryce/easystarjs)


## Installation

[Download the latest release](https://github.com/ralmn/EasyStarJS-Superpowers-plugins/archive/master.zip) and unzip it.

Rename the folder if you want then move it inside `app/plugins/ralmn/`.

Finally restart your server.

## Exemple

```typescript
let es = new EasyStar.js();
    
    let grid = [];
    
    for(let y = 0;  y < this.map.getHeight(); y++ ){
      let line = [];
      for(let x = 0; x < this.map.getWidth(); x++){
        line.push(this.map.getTileAt(1, x, y) == -1 ? 0 : 1);
      }
      grid.push(line);
    }
    es.setGrid(grid);
    
    es.setAcceptableTiles([-1]);
    es.findPath(this.posX, this.posY, endX, endX, (path: EasyStar.Position[]) => {
      if(path.length < 2) return;
      let newPos = path[1];
      }
      
    });
    es.calculate();
   
```
