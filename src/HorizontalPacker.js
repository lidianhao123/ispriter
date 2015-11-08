/******************************************************************************
* 图片排序算法，水平排列图片
******************************************************************************/

HorizontalPacker = function() { };

HorizontalPacker.prototype = {

  fit: function(blocks) {
    var n, block, x = 0, y = 0, maxH = 0, len = blocks.length;
    for (n = 0; n < len; n++) {
      block = blocks[n];
      block.fit = {
        w: block.w,
        h: block.h,
        x: x,
        y: y
      }
      if(maxH < block.h){
        maxH = block.h;
      }
      x = x + block.w;
    }
    this.root = {
      w: x,
      h: maxH
    }
  }
}

exports = module.exports = HorizontalPacker;