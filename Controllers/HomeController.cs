using Microsoft.AspNetCore.Mvc;

namespace Diarco.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Equipo()
    {

        return View();
    }

}
