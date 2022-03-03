<!DOCTYPE html>
<html lang="hu-HU">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div id="logo">
                <a href="/"><img src="" alt="szia, máj ném isz logo"></a>
            </div>
            <div class="col-md-4 col-md-offset-4" style="margin-top:20px;">
                <h4>Bejelentkezés:</h4>
                <hr>
                <form action="{{route('login-user')}}" method="post">
                    @if(Session::has('success'))
                    <div class="alert alert-success">{{Session::get('success')}}</div>
                    @endif
                    @if(Session::has('fail'))
                    <div class="alert alert-danger">{{Session::get('fail')}}</div>
                    @endif
                    @csrf
                    <div class="from-group">
                        <label for="email">Email:</label>
                        <input type="text" class="from-control" placeholder="Írd be az emailod:" name="email" value="{{old('email')}}">
                        <span class="text-danger">@error('email') {{$message}} @enderror</span>
                    </div>
                    <div class="from-group">
                        <label for="jelszo">Jelszó:</label>
                        <input type="password" class="from-control" placeholder="Írd be a jelszavad:" name="jelszo" value="{{old('jelszo')}}">
                        <span class="text-danger">@error('jelszo') {{$message}} @enderror</span>
                    </div>
                    <div class="from-group">
                        <button class="btn btn-block btn-primary" type="submit">Belépés</button>
                    </div>
                    <br>
                    <a href="registration">Ha nem vagy beregisztrálva, kattints ide!</a>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>