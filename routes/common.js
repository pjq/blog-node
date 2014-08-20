//module.export=Common;
exports.checkLogin = function(req, res, next){
  if (!req.session.user){
    req.flash('error', 'not login');
    res.redirect('/login');
  }
};

exports.checkNotLogin = function(req, res, next){
  if (req.session.user){
    req.flash('error', 'already login');
    res.redirect('back');
  }
};

