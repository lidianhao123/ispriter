/******************************************************************************
* 图片排序算法，垂直排列图片
******************************************************************************/

VerticalPacker = function() { };

VerticalPacker.prototype = {

  fit: function(blocks) {
    var n, block, x = 0, y = 0, maxw = 0, len = blocks.length;
    for (n = 0; n < len; n++) {
      block = blocks[n];
      block.fit = {
        w: block.w,
        h: block.h,
        x: x,
        y: y
      }
      if(maxw < block.w){
        maxw = block.w;
      }
      y = y + block.h;
    }
    this.root = {
      w: maxw,
      h: y
    }
  }
}

exports = module.exports = VerticalPacker;