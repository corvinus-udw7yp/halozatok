﻿using HajosTeszt.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    //[Route("api/[controller]")]
    public class BoatController : Controller
    {

        [HttpGet]
        [Route("questions/all")]
        public ActionResult M1()
        {
            hajostesztContext context = new hajostesztContext();
            var kérdések = from x in context.Questions select x.QuestionText;

            return new JsonResult(kérdések);
        }

        public IActionResult Index()
        {
            return View();
        }
    }

    //[Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        [HttpGet]
        [Route("questions/{sorszám}")]
        public ActionResult M2(int sorszám)
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions
                          where x.QuestionId == sorszám
                          select x).FirstOrDefault();

            if (kérdés == null) return BadRequest("Nincs ilyen sorszámú kérdés");

            return new JsonResult(kérdés);
        }
    }
}
