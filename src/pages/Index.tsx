import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const gameGenres = [
  'Экшн', 'РПГ', 'Стратегия', 'Симулятор', 'Спорт', 'Гонки', 'Инди', 'Хоррор'
];

const popularGames = [
  {
    id: 1,
    title: 'Minecraft',
    genre: 'Симулятор',
    size: '1.2 GB',
    rating: 4.9,
    downloads: '15.8M',
    image: 'img/a4ed50d1-0c03-40c7-8fda-6e37f89ad324.jpg',
    price: '2599₽',
    description: 'Создавай, исследуй и выживай в кубическом мире'
  },
  {
    id: 2,
    title: 'Roblox',
    genre: 'Симулятор',
    size: '2.8 GB',
    rating: 4.7,
    downloads: '12.3M',
    image: 'img/1b843979-568c-4521-8b92-8459c92e7296.jpg',
    price: 'Бесплатно',
    description: 'Миллионы игр от сообщества игроков'
  },
  {
    id: 3,
    title: 'Subway Surfers',
    genre: 'Экшн',
    size: '180 MB',
    rating: 4.8,
    downloads: '25.5M',
    image: 'img/9551a1a5-a35f-48db-aec1-87d2f17b7f11.jpg',
    price: 'Бесплатно',
    description: 'Беги по рельсам и собирай монеты'
  },
  {
    id: 4,
    title: 'CyberStrike 2077',
    genre: 'Экшн',
    size: '45.2 GB',
    rating: 4.8,
    downloads: '2.5M',
    image: 'img/30a44d24-b9ce-4de2-95cf-202f8b644c30.jpg',
    price: 'Бесплатно',
    description: 'Футуристический шутер в мире киберпанка'
  },
  {
    id: 5,
    title: 'Battle Royale Elite',
    genre: 'Экшн',
    size: '32.1 GB',
    rating: 4.6,
    downloads: '5.2M',
    image: 'img/0f5b0529-b5e6-4413-9229-323f8646e2df.jpg',
    price: 'Бесплатно',
    description: 'Королевская битва нового поколения'
  },
  {
    id: 6,
    title: 'Neon Racing',
    genre: 'Гонки',
    size: '28.5 GB',
    rating: 4.7,
    downloads: '1.8M',
    image: 'img/593d8e03-9383-41e3-bda1-065097e6dad7.jpg',
    price: '1299₽',
    description: 'Неоновые гонки по ночному городу'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark to-gaming-darker">
      {/* Header */}
      <header className="border-b border-border/20 backdrop-blur-sm bg-background/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Gamepad2" className="text-neon-green w-8 h-8 neon-text" />
              <h1 className="text-2xl font-bold neon-text">GameHub</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-neon-green transition-colors">Каталог</a>
              <a href="#" className="hover:text-neon-green transition-colors">Топ игр</a>
              <a href="#" className="hover:text-neon-green transition-colors">Новинки</a>
              <a href="#" className="hover:text-neon-green transition-colors">Жанры</a>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Download" className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-neon-green text-gaming-dark font-bold">Ю</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 neon-text">
            Скачай лучшие игры
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Огромная библиотека игр с быстрой загрузкой и бесплатными обновлениями
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск игр..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-card/50 border-border/50 focus:border-neon-green glow-effect"
              />
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-neon-green hover:bg-neon-green/80 text-gaming-dark font-semibold">
                Найти
              </Button>
            </div>
          </div>

          {/* Genre Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {gameGenres.map((genre) => (
              <Badge
                key={genre}
                variant={selectedGenre === genre ? "default" : "secondary"}
                className={`cursor-pointer px-4 py-2 transition-all hover:scale-105 ${
                  selectedGenre === genre
                    ? 'bg-neon-green text-gaming-dark glow-effect'
                    : 'bg-card/50 hover:bg-card/70 border-border/50'
                }`}
                onClick={() => setSelectedGenre(selectedGenre === genre ? '' : genre)}
              >
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Icon name="TrendingUp" className="w-8 h-8 text-neon-green" />
            Популярные игры
          </h2>
          <Button variant="outline" className="border-neon-green/50 hover:border-neon-green text-neon-green hover:bg-neon-green/10">
            Показать всё
            <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularGames.map((game) => (
            <Card key={game.id} className="game-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-neon-green/20 border-neon-green/50 text-neon-green">
                    {game.genre}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-gaming-dark/80 text-white">
                    ⭐ {game.rating}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{game.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {game.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Icon name="HardDrive" className="w-4 h-4" />
                    {game.size}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="Download" className="w-4 h-4" />
                    {game.downloads}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-neon-green">
                    {game.price}
                  </div>
                  <Button className="bg-neon-green hover:bg-neon-green/80 text-gaming-dark font-semibold glow-effect">
                    <Icon name="Download" className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green neon-text mb-2">500K+</div>
            <div className="text-muted-foreground">Активных игроков</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-blue neon-text mb-2">1,200</div>
            <div className="text-muted-foreground">Игр в каталоге</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green neon-text mb-2">50TB</div>
            <div className="text-muted-foreground">Загружено данных</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-blue neon-text mb-2">24/7</div>
            <div className="text-muted-foreground">Поддержка</div>
          </div>
        </div>
      </section>

      {/* User Profile Section */}
      <section className="container mx-auto px-6 py-12">
        <Card className="game-card">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-neon-green text-gaming-dark font-bold text-xl">Ю</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Юрий_Геймер</CardTitle>
                <CardDescription>Уровень 42 • Pro геймер</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Download" className="w-8 h-8 text-neon-green mx-auto mb-2" />
                <div className="text-2xl font-bold">127</div>
                <div className="text-muted-foreground">Скачанных игр</div>
              </div>
              <div className="text-center">
                <Icon name="Clock" className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                <div className="text-2xl font-bold">1,247ч</div>
                <div className="text-muted-foreground">В игре</div>
              </div>
              <div className="text-center">
                <Icon name="Trophy" className="w-8 h-8 text-neon-green mx-auto mb-2" />
                <div className="text-2xl font-bold">89</div>
                <div className="text-muted-foreground">Достижений</div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button className="flex-1 bg-neon-green hover:bg-neon-green/80 text-gaming-dark font-semibold">
                <Icon name="Settings" className="w-4 h-4 mr-2" />
                Настройки профиля
              </Button>
              <Button variant="outline" className="border-neon-blue/50 hover:border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                <Icon name="User" className="w-4 h-4 mr-2" />
                Моя библиотека
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-background/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-neon-green">Игры</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-green transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Топ игр</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Бесплатные</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Скидки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-neon-green">Сообщество</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-green transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Стримы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-neon-green">Поддержка</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-green transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Баг-репорт</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-neon-green">GameHub</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-green transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">Пресса</a></li>
                <li><a href="#" className="hover:text-neon-green transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GameHub. Все права защищены. Made with 🎮 для геймеров</p>
          </div>
        </div>
      </footer>
    </div>
  );
}