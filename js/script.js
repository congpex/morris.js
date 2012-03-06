/* Author:

*/

$(function () {
  // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
  tax_data = [
       {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
       {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
       {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
       {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
       {"period": "2010 Q3", "licensed": 3257, "sorned": 667},
       {"period": "2010 Q2", "licensed": 3248, "sorned": 627},
       {"period": "2010 Q1", "licensed": 3171, "sorned": 660},
       {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
       {"period": "2009 Q3", "licensed": 3201, "sorned": 656},
       {"period": "2009 Q2", "licensed": 3215, "sorned": 622},
       {"period": "2009 Q1", "licensed": 3148, "sorned": 632},
       {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
       {"period": "2008 Q3", "licensed": 3190, "sorned": 667},
       {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
       {"period": "2006 Q4", "licensed": 3245, "sorned": 0},
       {"period": "2005 Q4", "licensed": 3289, "sorned": 0},
       {"period": "2004 Q4", "licensed": 3263, "sorned": 0},
       {"period": "2003 Q4", "licensed": 3189, "sorned": 0},
       {"period": "2002 Q4", "licensed": 3079, "sorned": 0},
       {"period": "2001 Q4", "licensed": 3085, "sorned": 0},
       {"period": "2000 Q4", "licensed": 3055, "sorned": 0},
       {"period": "1999 Q4", "licensed": 3063, "sorned": 0},
       {"period": "1998 Q4", "licensed": 2943, "sorned": 0},
       {"period": "1997 Q4", "licensed": 2806, "sorned": 0},
       {"period": "1996 Q4", "licensed": 2674, "sorned": 0},
       {"period": "1995 Q4", "licensed": 1702, "sorned": 0},
       {"period": "1994 Q4", "licensed": 1732, "sorned": 0}
  ];
  new Morris.Line({
    element: 'hero-graph',
    data: tax_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'Off the road']
  });
  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
});

